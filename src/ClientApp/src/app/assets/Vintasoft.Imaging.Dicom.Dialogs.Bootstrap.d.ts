// Copyright 2014-2025 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.Dicom.UI.Dialogs {

  // ===== CLASSES =====

  /**
   * A web UI dialog (based on the Bootstrap) that allows to display metadata of DICOM image.
   */
  class WebUiDicomMetadataDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDicomMetadataDialogJS"] class.
     * @param dicomViewerControl The DICOM viewer control.
     */
    constructor(dicomViewerControl: Vintasoft.Imaging.Dicom.WebDicomViewerControlJS);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to change the window level for DICOM image in DICOM viewer.
   */
  class WebUiCustomDicomVoiLutDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiCustomDicomVoiLutDialogJS"] class.
     * @param dicomViewerControl The DICOM viewer control.
     */
    constructor(dicomViewerControl: Vintasoft.Imaging.Dicom.WebDicomViewerControlJS);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to display DICOM MPR control.
   */
  class WebUiDicomMprDialogJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDicomMprDialogJS"] class.
     * @param dicomMprControlContainerId An identifier of the page element, where the DICOM MPR control must be placed.
     * @param mprViewType The type of DICOM MPR view.
     */
    constructor(dicomMprControlContainerId: string, mprViewType: Vintasoft.Imaging.Dicom.WebMprViewTypeEnumJS);

    // PROPERTIES

    /**
     * Gets the DICOM MPR control.
     */
    get_DicomMprControl(): void;

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatElementContainer A DOM-element, where floating elements must be placed.
     */
    render(floatElementContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Shows the dialog.
     */
    show(): void;

    /**
     * Hides the dialog.
     */
    hide(): void;

  }

}

