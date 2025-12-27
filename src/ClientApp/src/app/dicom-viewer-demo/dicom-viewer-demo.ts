import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { BlockUiDialog } from '../dialogs/block-ui-dialog';
import { ErrorMessageDialog } from '../dialogs/error-message-dialog';


let _dicomViewerDemoComponent: DicomViewerDemoComponent;


@Component({
  selector: 'dicom-viewer-demo',
  templateUrl: './dicom-viewer-demo.html',
})
export class DicomViewerDemoComponent {

  // DICOM control.
  _dicomControl: Vintasoft.Imaging.Dicom.WebDicomControlJS | null = null;

  // Dialog that allows to block UI.
  _blockUiDialog: BlockUiDialog | null = null;



  constructor(public modalService: NgbModal, private httpClient: HttpClient) {
    _dicomViewerDemoComponent = this;
  }



  /**
   * Component is initializing.
   */
  ngOnInit() {
    // get identifier of current HTTP session
    this.httpClient.get<any>('api/Session/GetSessionId').subscribe(data => {
      // set the session identifier
      Vintasoft.Shared.WebImagingEnviromentJS.set_SessionId(data.sessionId);

      // specify web services, which should be used by Vintasoft Web DICOM control
      Vintasoft.Shared.WebServiceJS.defaultFileService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftFileApi");
      Vintasoft.Shared.WebServiceJS.defaultDicomService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftDicomApi");

      let dicomControlSettings: Vintasoft.Imaging.Dicom.WebDicomControlSettingsJS = new Vintasoft.Imaging.Dicom.WebDicomControlSettingsJS("dicomViewerControlContainer", "dicomViewerControl");
      this._dicomControl = new Vintasoft.Imaging.Dicom.WebDicomControlJS(dicomControlSettings);


      // subscribe to the "warningOccured" event of DICOM control
      Vintasoft.Shared.subscribeToEvent(this._dicomControl, "warningOccured", this.__dicomControl_warningOccured);
      // subscribe to the "asyncOperationFailed" event of DICOM control
      Vintasoft.Shared.subscribeToEvent(this._dicomControl, "asyncOperationFailed", this.__dicomControl_asyncOperationFailed);
      // subscribe to the "sessionCacheCleared" event of DICOM control
      Vintasoft.Shared.subscribeToEvent(this._dicomControl, "sessionCacheCleared", this.__dicomControl_sessionCacheCleared);


      // subscribe to the "resize" event of window
      window.onresize = this.__window_resize;
      // change the visibility of demo header
      this.__changeDemoHeaderVisibility(window.innerHeight < 500);

      document.oncontextmenu = function () {
        // specify that context menu of web browser should not be shown
        return false;
      };

      var dicomViewerControl = this._dicomControl.get_DicomViewerControl();
      if (dicomViewerControl != null) {
        // set count of images, which can be requested per one request
        dicomViewerControl.set_RequestingImageCount(5);
      }

      // open the DICOM files from current session
      this.__openDicomFilesFromCurrentSession();

      if (!this.__isMobileDevice()) {
        // show the DICOM series manager panel
        this.__shownDicomSeriesManagerPanel();
      }

      this.__subscribeToMeasurementDefaultUnitsOfMeasureChangedEvents();
    });
  }



  // === DICOM control events ===

  /**
   Warning is occured in DICOM control.
  */
  __dicomControl_warningOccured(event: any, eventArgs: any) {
    // show the error message
    _dicomViewerDemoComponent.__showErrorMessage(eventArgs);
  }

  /**
   Asynchronous operation is failed in DICOM control.
  */
  __dicomControl_asyncOperationFailed(event: any, eventArgs: any) {
    if (eventArgs.data != null) {
        // show the error message
        _dicomViewerDemoComponent.__showErrorMessage(eventArgs.data.errorMessage);
    }
  }

  /**
   Session cache is cleared in DICOM control.
  */
  __dicomControl_sessionCacheCleared(event: any, eventArgs: any) {
    // show message
    alert("Cache is cleared successfully.");
  }



  // === Open default DICOM file ===

  /**
   Opens the DICOM files from current session.
  */
  __openDicomFilesFromCurrentSession() {
    // DICOM service
    var dicomService = Vintasoft.Shared.WebServiceJS.defaultDicomService;


    /**
     Request is executed successully.
     @param {object} data The server response.
     @function @private
    */
    function __successFunc(data: any) {
      var files = data.files;

      // if current session have files
      if (files != null && files.length > 0 && _dicomViewerDemoComponent._dicomControl != null) {
        // add DICOM files to the DICOM control
        _dicomViewerDemoComponent._dicomControl.addFiles(files);
      }
      else {
        // open the default DICOM file
        _dicomViewerDemoComponent.__openDefaultDicomFile();
      }
    }

    /**
     Request is failed.
     @param {object} data The server response.
     @function @private
    */
    function __errorFunc(data: any) {
      _dicomViewerDemoComponent.__showErrorMessage(data.errorMessage);
    }


    // create a request for getting information about DICOM files, which are stored in current HTTP session
    var request = new Vintasoft.Shared.WebRequestJS("GetCurrentSessionFiles", __successFunc, __errorFunc, { type: 'POST' });
    // send the request
    dicomService.sendRequest(request);
  }

  /**
   Opens the default DICOM file.
  */
  __openDefaultDicomFile() {
    let fileId = "DicomMprTest.dcm";
    // copy the file from global folder to the session folder
    Vintasoft.Imaging.VintasoftFileAPI.copyFile(
      "UploadedImageFiles/" + fileId,
      _dicomViewerDemoComponent.__onCopyFile_success,
      _dicomViewerDemoComponent.__onCopyFile_error);
  }

  /**
   Request for copying of file is executed successfully.
   @param {object} data Information about copied file.
  */
  __onCopyFile_success(data: any) {
    if (_dicomViewerDemoComponent._dicomControl != null) {
      _dicomViewerDemoComponent._dicomControl.addFiles([data.fileId]);
    }
  }

  /**
   Request for copying of file is failed.
   @param {object} data Information about error.
  */
  __onCopyFile_error(data: any) {
    alert(data.errorMessage);
  }



  // === Utils ===

  /**
   * Blocks the UI. 
   * @param text Message that describes why UI is blocked.
   */
  __blockUI(text: string) {
    _dicomViewerDemoComponent._blockUiDialog = new BlockUiDialog(_dicomViewerDemoComponent.modalService);
    _dicomViewerDemoComponent._blockUiDialog.message = text;
    _dicomViewerDemoComponent._blockUiDialog.open();
  }

  /**
   Unblocks the UI.
  */
  __unblockUI() {
    if (_dicomViewerDemoComponent._blockUiDialog != null && _dicomViewerDemoComponent._blockUiDialog !== undefined)
      _dicomViewerDemoComponent._blockUiDialog.close();
  }

  /**
   * Shows an error message.
   * @param data Information about error.
   */
  __showErrorMessage(data: any) {
    _dicomViewerDemoComponent.__unblockUI();
    let dlg: ErrorMessageDialog = new ErrorMessageDialog(_dicomViewerDemoComponent.modalService);
    dlg.errorData = data;
    dlg.open();
  }

  /**
   Returns application URL.
  */
  __getApplicationUrl() {
    let applicationUrl = window.location.toString();
    if (applicationUrl[applicationUrl.length - 1] != '/')
      applicationUrl = applicationUrl + '/';
    return applicationUrl;
  }

  /**
   Returns a value indicating whether application is executing on mobile device.
  */
  __isMobileDevice() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  /**
   Window is resized.
  */
  __window_resize() {
    _dicomViewerDemoComponent.__changeDemoHeaderVisibility(window.innerHeight < 500)

    if (_dicomViewerDemoComponent._dicomControl != null) {
      _dicomViewerDemoComponent._dicomControl.updateUI();
    }
  }

  /**
   * Changes the visibility of demo header.
   * @param hide Message that describes why UI is blocked.
  */
  __changeDemoHeaderVisibility(hide: boolean) {
    var displayStyle = "block";
    var heightStyle = (window.innerHeight - 60) + "px";
    if (hide) {
      displayStyle = "none";
      heightStyle = window.innerHeight + "px"
    }

    let demoHeader = document.getElementById("demoHeader");
    if (demoHeader != null) {
      demoHeader.style.display = displayStyle;
    }

    let dicomViewerControlContainer = document.getElementById("dicomViewerControlContainer");
    if (dicomViewerControlContainer != null) {
      dicomViewerControlContainer.style.height = heightStyle;
    }
  }
  
  /**
   Shows the DICOM series manager panel.
  */
  __shownDicomSeriesManagerPanel() {
    if (_dicomViewerDemoComponent._dicomControl != null) {
      var items = _dicomViewerDemoComponent._dicomControl.get_Items();
      var sidePanel = items.getItemByRegisteredId("sidePanel") as Vintasoft.Imaging.UI.Panels.WebUiSidePanelJS;
      var seriesManagerPanel = items.getItemByRegisteredId("vsdm-dicomSeriesManagerPanel") as Vintasoft.Imaging.UI.Panels.WebUiPanelJS;
      sidePanel.set_ActivePanel(seriesManagerPanel);
    }
  }

  /**
   Changes "MeasurementDefaultTickFactors" property in viewer.
  */
  __changeMeasurementDefaultTickFactors(event: any) {
    // get target viewer
    var viewer = event.target;

    // get string value of enum value
    var unitsOfMeasureString = viewer.get_MeasurementDefaultUnitsOfMeasure().toString();
    switch (unitsOfMeasureString) {
      case "Inches":
        // set the measurement default tick factors
        viewer.set_MeasurementDefaultTickFactors([0.1, 0.5, 1]);
        break;

      case "Centimeters":
        // set the measurement default tick factors
        viewer.set_MeasurementDefaultTickFactors([1, 5, 10]);
        break;

      case "Millimeters":
      case "Pixels":
        // set the measurement default tick factors
        viewer.set_MeasurementDefaultTickFactors([10, 50, 100]);
        break;
    }

    // subscribe once to the "disposed" event of viewer
    Vintasoft.Shared.subscribeToEventOnce(viewer, "disposed", function (event: any) {
      var viewer = event.target;
      // unsubscribe from the "measurementDefaultUnitsOfMeasureChanged" event
      Vintasoft.Shared.unsubscribeFromEvent(viewer, "measurementDefaultUnitsOfMeasureChanged", _dicomViewerDemoComponent.__changeMeasurementDefaultTickFactors);
    });
  }

  /**
   Subscribes to the "measurementDefaultUnitsOfMeasureChanged" events.
  */
  __subscribeToMeasurementDefaultUnitsOfMeasureChangedEvents() {
    if (_dicomViewerDemoComponent._dicomControl != null) {
      var dicomViewerControl = _dicomViewerDemoComponent._dicomControl.get_DicomViewerControl()
      // subscribe to the "measurementDefaultUnitsOfMeasureChanged" event of web DICOM viewer control
      Vintasoft.Shared.subscribeToEvent(dicomViewerControl, "measurementDefaultUnitsOfMeasureChanged", _dicomViewerDemoComponent.__changeMeasurementDefaultTickFactors);

      // subscribe to the "dicomMprControlAdded" event of web DICOM control
      Vintasoft.Shared.subscribeToEvent(_dicomViewerDemoComponent._dicomControl, "dicomMprControlAdded", function (event: any, eventArgs: any) {
        // get DICOM MPR control from event arguments
        var dicomMprControl = eventArgs.dicomMprControl;

        // get viewers from web DICOM MPR viewer control
        var dicomMprViewerControls = dicomMprControl.get_DicomMprViewerControls();
        // for each web DICOM MPR viewer control
        for (var i = 0; i < dicomMprViewerControls.length; i++) {
          // subscribe to the "measurementDefaultUnitsOfMeasureChanged" event of web DICOM MPR viewer control
          Vintasoft.Shared.subscribeToEvent(dicomMprViewerControls[i], "measurementDefaultUnitsOfMeasureChanged", _dicomViewerDemoComponent.__changeMeasurementDefaultTickFactors);
        }
      });
    }
  }

}
