// Copyright 2014-2025 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.Dicom {

  // ===== ENUMS =====

  /**
   * Specifies available units of measure for DICOM image.
   */
  class WebDicomUnitOfMeasureEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes, which specify how user can interact with image in DICOM viewer.
   */
  class WebDicomViewerInteractionModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available value types for <see cref="DicomMetadataElement"/>.
   */
  class WebDicomMetadataElementValueTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types for DICOM measurement.
   */
  class WebDicomMeasurementTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available directions for the image ruler.
   */
  class WebDicomImageRulerDirectionEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes, which specify how user can interact with image in DICOM MPR viewer.
   */
  class WebDicomMprViewerInteractionModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of DICOM MPR view.
   */
  class WebMprViewTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== CLASSES =====

  /**
   * Provides a base class for DICOM measurement.
   */
  class WebDicomMeasurementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomMeasurementJS"] class.
     * @param viewer An instance of WebDicomViewerControlJS or WebDicomMprViewerControlJS class.
     * @param dicomMeasurementType The type of DICOM measurement.
     */
    constructor(viewer: Vintasoft.Imaging.Dicom.WebDicomViewerBaseControlJS, dicomMeasurementType: Vintasoft.Imaging.Dicom.WebDicomMeasurementTypeEnumJS);

    // PROPERTIES

    /**
     * Gets the DICOM viewer.
     */
    get_Viewer(): Vintasoft.Imaging.Dicom.WebDicomViewerBaseControlJS;

    /**
     * Gets the type of DICOM measurement.
     */
    get_DicomMeasurementType(): Vintasoft.Imaging.Dicom.WebDicomMeasurementTypeEnumJS;

    /**
     * Gets the default font properties.
     */
    get_FontProperties(): Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS;

    /**
     * Sets the default font properties.
     * @param value Default value is <b>null</b>.
     */
    set_FontProperties(value: Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS): void;

    /**
     * Gets the text alignment.
     */
    get_TextAlignment(): Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS;

    /**
     * Sets the text alignment.
     * @param value The default value is <b>null</b>.
     */
    set_TextAlignment(value: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS): void;

    /**
     * Gets the width, in pixels, of measurement line.
     */
    get_LineWidth(): number;

    /**
     * Sets the width, in pixels, of measurement line.
     * @param value The default value is <b>0</b>.
     */
    set_LineWidth(value: number): void;

    /**
     * Gets the color for measurement.
     */
    get_Color(): string;

    /**
     * Sets the color for measurement.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_Color(value: string): void;

    /**
     * Gets the unit of measure for measurement.
     */
    get_UnitsOfMeasure(): Vintasoft.Imaging.Dicom.WebDicomUnitOfMeasureEnumJS;

    /**
     * Sets the unit of measure for measurement.
     * @param value The default value is <b>null</b>, i.e. measurement will use the measurement default units of measure.
     */
    set_UnitsOfMeasure(value: Vintasoft.Imaging.Dicom.WebDicomUnitOfMeasureEnumJS): void;

    /**
     * Gets the text block template for measurement result.
     */
    get_MeasuringTextTemplate(): string;

    /**
     * Sets the text block template for measurement result.
     * @param value The text block template for measurement result.
     */
    set_MeasuringTextTemplate(value: string): void;

    // METHODS

    /**
     * Returns the measured values as a string.
     */
    getMeasuredValuesAsString(): string;

  }

  /**
   * Represents a collection of text overlays, which can be displayed in DICOM viewer.
   */
  class WebDicomTextOverlayCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomTextOverlayCollectionJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the number of elements, which are contained in the collection.
     */
    get_Count(): number;

    // METHODS

    /**
     * Adds text overlay to this collection.
     * @param overlay The text overlay to add.
     */
    add(overlay: Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS): void;

    /**
     * Adds an array of text overlays to this collection.
     * @param array An array that contains instances of WebDicomTextOverlayJS class.
     */
    addRange(array: Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS[]): void;

    /**
     * Inserts text overlay to this collection.
     * @param index The zero-based index at which item should be inserted.
     * @param overlay The text overlay to insert.
     */
    insert(index: number, overlay: Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS): void;

    /**
     * Returns a value indicating whether this collection contains specified text overlay.
     * @param overlay The text overlay to locate in this collection.
     */
    contains(overlay: Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS): boolean;

    /**
     * Returns the zero-based index of the first occurrence of text overlay in this collection.
     * @param overlay The text overlay to locate in this collection.
     */
    indexOf(overlay: Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS): number;

    /**
     * Removes text overlay from this colleciton.
     * @param overlay The text overlay to remove.
     */
    remove(overlay: Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS): void;

    /**
     * Removes text overlay from this collection.
     * @param index The zero-based index of text overlay to remove.
     */
    removeAt(index: number): void;

    /**
     * Removes all text overlays from this collection.
     */
    clear(): void;

    /**
     * Returns an array of text overlays.
     */
    toArray(): Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS[];

    /**
     * Returns text overlay at the specified index.
     * @param index The zero-based index of text overlay in this colleciton.
     */
    getItem(index: number): Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS;

  }

  /**
   * Represents a static text, which can be displayed in DICOM viewer.
   */
  class WebDicomTextOverlayJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomTextOverlayJS"] class.
     * @param anchor The text anchor in viewer.
     */
    constructor(anchor: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS);

    // PROPERTIES

    /**
     * Gets text anchor.
     */
    get_Anchor(): Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS;

    /**
     * Sets text anchor.
     * @param value The text anchor.
     */
    set_Anchor(value: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS): void;

    /**
     * Gets the text, which must be drawn.
     */
    get_Text(): string;

    /**
     * Sets the text, which must be drawn.
     * @param value The text, which must be drawn.
     */
    set_Text(value: string): void;

    /**
     * Gets the format of overlay value.
     */
    get_TextFormat(): string;

    /**
     * Sets the format of overlay value.
     * @param value The format of overlay value.
     */
    set_TextFormat(value: string): void;

    /**
     * Gets the font, which must be used for drawing the text.
     */
    get_FontProperties(): Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS;

    /**
     * Sets the font, which must be used for drawing the text.
     * @param value The font, which must be used for drawing the text. Default value is <b>Arial</b>, size is 12.
     */
    set_FontProperties(value: Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS): void;

    /**
     * Gets a value indicating whether the text overlay is visible.
     */
    get_IsVisible(): boolean;

    /**
     * Sets a value indicating whether the text overlay is visible.
     * @param value The value indicating whether the text overlay is visible.
     */
    set_IsVisible(value: boolean): void;

    // METHODS

    /**
     * Updates the properties.
     */
    updateProperties(): void;

    /**
     * Returns a string that represents this instance.
     */
    toString(): string;

  }

  /**
   * Represents a line of static texts objects, which can be displayed in DICOM viewer.
   */
  class WebDicomTextOverlayLineJS extends Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomTextOverlayLineJS"] class.
     * @param anchor The anchor.
     * @param textOverlaySeparator The separator, which must be inserted between the text overlays.
     * @param items The items, which must be drawn in viewer.
     */
    constructor(anchor: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS, textOverlaySeparator: string, items: Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS[]);

    // PROPERTIES

    /**
     * Gets the separator, which must be inserted between the text overlays.
     */
    get_TextOverlaySeparator(): string;

    /**
     * Sets the separator, which must be inserted between the text overlays.
     * @param value Default value is space character (" ").
     */
    set_TextOverlaySeparator(value: string): void;

    /**
     * Gets the items, which must be drawn in viewer.
     */
    get_Items(): Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS[];

    /**
     * Sets the items, which must be drawn in viewer.
     * @param value The items, which must be drawn in viewer.
     */
    set_Items(value: Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS[]): void;

  }

  /**
   * Represents a text object, which shows DICOM frame compression.
   */
  class WebDicomCompressionInfoTextOverlayJS extends Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomCompressionInfoTextOverlayJS"] class.
     * @param anchor The text anchor in viewer.
     */
    constructor(anchor: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS);

  }

  /**
   * Represents a text object that shows loading progress in the DICOM viewer.
   */
  class WebDicomLoadingProgressTextOverlayJS extends Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomLoadingProgressTextOverlayJS"] class.
     * @param anchor The text anchor in image viewer.
     */
    constructor(anchor: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS);

  }

  /**
   * Represents a text object that shows a patient orientation of DICOM frame in image viewer.
   */
  class WebDicomPatientOrientationTextOverlayJS extends Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomPatientOrientationTextOverlayJS"] class.
     * @param anchor The text anchor in viewer.
     */
    constructor(anchor: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS);

  }

  /**
   * Represents a text object that shows a Window Level for DICOM frame in DICOM viewer.
   */
  class WebDicomWindowLevelTextOverlayJS extends Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomWindowLevelTextOverlayJS"] class.
     * @param anchor The text anchor in image viewer.
     */
    constructor(anchor: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS);

  }

  /**
   * Represents a text object that shows a custom data element of DICOM file in image viewer.
   */
  class WebDicomCustomMetadataTextOverlayJS extends Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomCustomMetadataTextOverlayJS"] class.
     * @param anchor The text anchor in image viewer.
     * @param groupNumber The data element group number.
     * @param elementNumber The data element number.
     * @param textFormat The text format.
     */
    constructor(anchor: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS, groupNumber: number, elementNumber: number, textFormat: string);

    // PROPERTIES

    /**
     * Gets the group number of DICOM data element.
     */
    get_GroupNumber(): number;

    /**
     * Gets the element number of DICOM data element.
     */
    get_ElementNumber(): number;

  }

  /**
   * Represents a text object that shows value of specified DICOM tag for focused DICOM frame in DICOM viewer.
   */
  class WebDicomMetadataTextOverlayJS extends Vintasoft.Imaging.Dicom.WebDicomTextOverlayJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomMetadataTextOverlayJS"] class.
     * @param anchor The text anchor in image viewer.
     * @param elementId An identifier of DICOM tag.
     * @param textFormat A format that must be applied to the value of DICOM tag.
     */
    constructor(anchor: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS, elementId: string, textFormat: string);

    // PROPERTIES

    /**
     * Gets an identifier of DICOM tag.
     */
    get_ElementId(): string;

  }

  /**
   * Represents a collection of rulers, which can be displayed in DICOM viewer.
   */
  class WebDicomImageRulerCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomImageRulerCollectionJS"] class.
     * @param dicomViewerControl The DICOM viewer control.
     */
    constructor(dicomViewerControl: Vintasoft.Imaging.Dicom.WebDicomViewerControlJS);

    // PROPERTIES

    /**
     * Gets the number of elements, which are contained in the collection.
     */
    get_Count(): number;

    // METHODS

    /**
     * Adds ruler to this collection.
     * @param ruler The ruler to add.
     */
    add(ruler: Vintasoft.Imaging.Dicom.WebDicomImageRulerJS): void;

    /**
     * Adds an array of rulers to this collection.
     * @param array An array that contains instances of WebDicomImageRulerJS class.
     */
    addRange(array: Vintasoft.Imaging.Dicom.WebDicomImageRulerJS[]): void;

    /**
     * Inserts ruler to this collection.
     * @param index The zero-based index at which item should be inserted.
     * @param ruler The ruler to insert.
     */
    insert(index: number, ruler: Vintasoft.Imaging.Dicom.WebDicomImageRulerJS): void;

    /**
     * Returns a value indicating whether this collection contains specified ruler.
     * @param ruler The ruler to locate in this collection.
     */
    contains(ruler: Vintasoft.Imaging.Dicom.WebDicomImageRulerJS): boolean;

    /**
     * Returns the zero-based index of the first occurrence of ruler in this collection.
     * @param ruler The ruler to locate in this collection.
     */
    indexOf(ruler: Vintasoft.Imaging.Dicom.WebDicomImageRulerJS): number;

    /**
     * Removes ruler from this colleciton.
     * @param ruler The ruler to remove.
     */
    remove(ruler: Vintasoft.Imaging.Dicom.WebDicomImageRulerJS): void;

    /**
     * Removes ruler from this collection.
     * @param index The zero-based index of ruler to remove.
     */
    removeAt(index: number): void;

    /**
     * Removes all rulers from this collection.
     */
    clear(): void;

    /**
     * Returns an array of rulers.
     */
    toArray(): Vintasoft.Imaging.Dicom.WebDicomImageRulerJS[];

    /**
     * Returns ruler at the specified index.
     * @param index The zero-based index of ruler in this colleciton.
     */
    getItem(index: number): Vintasoft.Imaging.Dicom.WebDicomImageRulerJS;

  }

  /**
   * A graphics object that shows a ruler for DICOM image in DICOM viewer.
   */
  class WebDicomImageRulerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomImageRulerJS"] class.
     * @param dicomViewerControl The DICOM viewer control.
     */
    constructor(dicomViewerControl: Vintasoft.Imaging.Dicom.WebDicomViewerControlJS);

    // PROPERTIES

    /**
     * Gets the width, in pixels, of measurement line.
     */
    get_LineWidth(): number;

    /**
     * Sets the width, in pixels, of measurement line.
     * @param value Default value is <b>2</b>.
     */
    set_LineWidth(value: number): void;

    /**
     * Gets the color of measurement line.
     */
    get_Color(): string;

    /**
     * Sets the color of measurement line.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_Color(value: string): void;

    /**
     * Gets units for measurement line.
     */
    get_UnitOfMeasure(): Vintasoft.Imaging.Dicom.WebDicomUnitOfMeasureEnumJS;

    /**
     * Sets units for measurement line.
     * @param value Default value is <b>WebDicomUnitOfMeasureEnumJS.Centimeters</b>.
     */
    set_UnitOfMeasure(value: Vintasoft.Imaging.Dicom.WebDicomUnitOfMeasureEnumJS): void;

    /**
     * Gets a step, in units of measure, for small ticks.
     */
    get_SmallTickFrequency(): number;

    /**
     * Sets a step, in units of measure, for small ticks.
     * @param value Possible values from 0.1 to 1.0. Default value is <b>0.5</b>.
     */
    set_SmallTickFrequency(value: number): void;

    /**
     * Gets a step, in units of measure, for large ticks.
     */
    get_LargeTickFrequency(): number;

    /**
     * Sets a step, in units of measure, for large ticks.
     * @param value Possible values from 0.1 to 1.0. Default value is <b>1.0</b>.
     */
    set_LargeTickFrequency(value: number): void;

    /**
     * Gets a value indicating whether the text is visible.
     */
    get_IsVisible(): boolean;

    /**
     * Sets a value indicating whether the text is visible.
     * @param value <b>True</b> if the text is visible; otherwise, <b>false</b>.<br /> Default value is <b>true</b>.
     */
    set_IsVisible(value: boolean): void;

    /**
     * Gets a text anchor.
     */
    get_Anchor(): Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS;

    /**
     * Sets a text anchor.
     * @param value Default value is <b>WebAnchorTypeEnumJS.Left</b>.
     */
    set_Anchor(value: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS): void;

    /**
     * Gets a ruler direction.
     */
    get_Direction(): Vintasoft.Imaging.Dicom.WebDicomImageRulerDirectionEnumJS;

    /**
     * Sets a ruler direction.
     * @param value Default value is <b>WebDicomImageRulerDirectionEnumJS.Horizontal</b>.
     */
    set_Direction(value: Vintasoft.Imaging.Dicom.WebDicomImageRulerDirectionEnumJS): void;

    /**
     * Gets a ruler length in pixels.
     */
    get_Length(): number;

    /**
     * Sets a ruler length in pixels.
     * @param value Default value is <b>250</b>.
     */
    set_Length(value: number): void;

    /**
     * Gets a ruler padding relative to Anchor.
     */
    get_Padding(): number;

    /**
     * Sets a ruler padding relative to Anchor.
     * @param value Default value is <b>20.0</b>.
     */
    set_Padding(value: number): void;

  }

  /**
   * Represents a metadata node that stores information about DICOM data element.
   */
  class WebDicomMetadataElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomMetadataElementJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the DICOM group number.
     */
    get_GroupNumber(): number;

    /**
     * Gets the DICOM element number.
     */
    get_ElementNumber(): number;

    /**
     * Gets the type of the element value.
     */
    get_ValueType(): Vintasoft.Imaging.Dicom.WebDicomMetadataElementValueTypeEnumJS;

    /**
     * Gets the element identifier.
     */
    get_ElementId(): string;

    /**
     * Gets the name of the element.
     */
    get_ElementName(): string;

    /**
     * Gets the data type of the element.
     */
    get_ValueRepresentation(): string;

    /**
     * Gets the value.
     */
    get_Value(): number;

  }

  /**
   * Stores information about a DICOM image.
   */
  class WebDicomImageJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomImageJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the metadata of DICOM file.
     */
    get_FileMetadata(): Vintasoft.Imaging.Dicom.WebDicomMetadataElementJS[];

    /**
     * Gets the metadata of DICOM image.
     */
    get_ImageMetadata(): Vintasoft.Imaging.Dicom.WebDicomMetadataElementJS[];

    /**
     * Gets the default window level.
     */
    get_DefaultWindowLevel(): object;

    /**
     * Gets the image width, in pixels.
     */
    get_Width(): number;

    /**
     * Gets the image height, in pixels.
     */
    get_Height(): number;

    /**
     * Gets the image resolution.
     */
    get_Resolution(): Vintasoft.Shared.WebResolutionJS;

    /**
     * Gets the image name.
     */
    get_ImageName(): string;

  }

  /**
   * Represents the font properties.
   */
  class WebVintasoftFontPropertiesJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebVintasoftFontPropertiesJS"] class.
     * @param name The font name.
     * @param size The font size, in points.
     * @param color The font color. The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     * @param isBold A value indicating whether font is bold.
     * @param isItalic A value indicating whether font is italic.
     * @param isUnderline A value indicating whether font is underlined.
     * @param isStrikeout A value indicating whether font is strikeout.
     */
    constructor(name: string, size: number, color: string, isBold: boolean, isItalic: boolean, isUnderline: boolean, isStrikeout: boolean);

    // PROPERTIES

    /**
     * Gets the font name.
     */
    get_Name(): void;

    /**
     * Gets the font size, in points.
     */
    get_Size(): void;

    /**
     * Gets a value indicating whether font is bold.
     */
    get_IsBold(): void;

    /**
     * Gets a value indicating whether font is italic.
     */
    get_IsItalic(): void;

    /**
     * Gets a value indicating whether font is underlined.
     */
    get_IsUnderline(): void;

    /**
     * Gets a value indicating whether font is strikeout.
     */
    get_IsStrikeout(): void;

    /**
     * Gets the font color.
     */
    get_Color(): string;

    // METHODS

    /**
     * Returns the font size, in pixels.
     */
    getSizeInPixels(): number;

    /**
     * Returns a value indicating whether the specified object, is equal to this instance.
     * @param obj The object to compare with this instance.
     */
    equals(obj: object): void;

  }

  /**
   * Stores the properties of the text line in a panel on <see cref="WebDicomSeriesManagerControlJS"/>.
   */
  class WebDicomSeriesManagerTextLineJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomSeriesManagerTextLineJS"] class.
     * @param format The text format.
     * @param textColor The text color - string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)"). Can be null.
     * @param selectedTextColor Color of the text in selected state - string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)"). Can be null.
     * @param font The font. Can be null.
     */
    constructor(format: string, textColor: string, selectedTextColor: string, font: Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS);

    // PROPERTIES

    /**
     * Gets the text format.
     */
    get_Format(): string;

    /**
     * Gets the text color.
     */
    get_TextColor(): string;

    /**
     * Gets the color of the text in selected state.
     */
    get_SelectedTextColor(): string;

    /**
     * Gets the font.
     */
    get_Font(): Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS;

  }

  /**
   * Represents a base JavaScript UI control that allows to display DICOM images in HTML5 web browser.
   */
  class WebDicomViewerBaseControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomViewerBaseControlJS"] class.
     * @param parentDiv A parent DIV-element.
     */
    constructor(parentDiv: string);

    // PROPERTIES

    /**
     * Gets the source of DICOM images.
     */
    get_Source(): string[];

    /**
     * Sets the source of DICOM images.
     * @param value An array that contains string identifiers of DICOM files.
     */
    set_Source(value: string[]): void;

    /**
     * Gets the identifiers of "primary" DICOM metadata.
     */
    get_PrimaryMetadataIdentifiers(): string[];

    /**
     * Sets the identifiers of "primary" DICOM metadata.
     * @param value An array that contains "primary" DICOM metadata identifiers.
     */
    set_PrimaryMetadataIdentifiers(value: string[]): void;

    /**
     * Gets the DICOM images.
     */
    get_Images(): Vintasoft.Imaging.Dicom.WebDicomImageJS[];

    /**
     * Gets the background color.
     */
    get_BackgroundColor(): string;

    /**
     * Sets the background color.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_BackgroundColor(value: string): void;

    /**
     * Gets the device pixel scale.
     */
    get_DevicePixelScale(): number;

    /**
     * Gets the focused DICOM image.
     */
    get_FocusedImage(): Vintasoft.Imaging.Dicom.WebDicomImageJS;

    /**
     * Sets the focused DICOM image.
     * @param value The focused DICOM image.
     */
    set_FocusedImage(value: Vintasoft.Imaging.Dicom.WebDicomImageJS): void;

    /**
     * Gets the image offset, in pixels, in viewer.
     */
    get_ImageOffset(): object;

    /**
     * Sets the image offset, in pixels, in viewer.
     * @param value An object that contains image offset - { x:number, y:number }.
     */
    set_ImageOffset(value: object): void;

    /**
     * Gets the control size, in surface space.
     */
    get_Size(): object;

    /**
     * Gets the zoom factor in DICOM viewer.
     */
    get_Zoom(): number;

    /**
     * Sets the zoom factor in DICOM viewer.
     * @param value The zoom factor. Default value is 1 (100%).
     */
    set_Zoom(value: number): void;

    /**
     * Gets the window level in DICOM viewer.
     */
    get_WindowLevel(): object;

    /**
     * Sets the window level in DICOM viewer.
     * @param value An object ({ windowCenter:number, windowWidth:number}), which contains information about window level in DICOM viewer.
     */
    set_WindowLevel(value: object): void;

    /**
     * Gets a value indicating whether DICOM viewer should invert colors of DICOM image.
     */
    get_Negative(): boolean;

    /**
     * Sets a value indicating whether DICOM viewer should invert colors of DICOM image.
     * @param value <b>True</b> if DICOM viewer should invert colors of DICOM image; otherwise, <b>false</b>. Default value is <b>false</b>.
     */
    set_Negative(value: boolean): void;

    /**
     * Gets the default font properties for TextOverlay property.
     */
    get_TextOverlayDefaultFontProperties(): Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS;

    /**
     * Sets the default font properties for TextOverlay property.
     * @param value The text overlay font properties.
     */
    set_TextOverlayDefaultFontProperties(value: Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS): void;

    /**
     * Gets the default font properties for measurement.
     */
    get_MeasurementTextDefaultFontProperties(): Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS;

    /**
     * Sets the default font properties for measurement.
     * @param value The font properties for measurement.
     */
    set_MeasurementTextDefaultFontProperties(value: Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS): void;

    /**
     * Gets the default text alignment for measurement.
     */
    get_MeasurementTextDefaultTextAlignment(): Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS;

    /**
     * Sets the default text alignment for measurement.
     * @param value The default text alignment for measurement. Default value is "Right".
     */
    set_MeasurementTextDefaultTextAlignment(value: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS): void;

    /**
     * Gets an array of DICOM overlays.
     */
    get_TextOverlays(): Vintasoft.Imaging.Dicom.WebDicomTextOverlayCollectionJS;

    /**
     * Gets the padding, in pixels, for text overlay.
     */
    get_TextOverlayPadding(): object;

    /**
     * Sets the padding, in pixels, for text overlay.
     * @param left Left text overlay padding. Valid value is 0 and any positive value. Default value 10.
     * @param top Top text overlay padding. Valid value is 0 and any positive value. Default value 10.
     * @param right Right text overlay padding. Valid value is 0 and any positive value. Default value 10.
     * @param bottom Bottom text overlay padding. Valid value is 0 and any positive value. Default value 10.
     */
    set_TextOverlayPadding(value: number): void;

    /**
     * Gets a value indicating whether DICOM viewer must show text overlays.
     */
    get_ShowTextOverlays(): boolean;

    /**
     * Sets a value indicating whether DICOM viewer must show text overlays.
     * @param value True - DICOM viewer must show text overlays; False - DICOM viewer must not show text overlays.
     */
    set_ShowTextOverlays(value: boolean): void;

    /**
     * Gets a value indicating whether DICOM viewer must show measurements.
     */
    get_ShowMeasurements(): boolean;

    /**
     * Sets a value indicating whether DICOM viewer must show measurements.
     * @param value True - DICOM viewer must show measurements; False - DICOM viewer must not show measurements.
     */
    set_ShowMeasurements(value: boolean): void;

    /**
     * Gets the line width, in pixels, for measurement.
     */
    get_MeasurementLineWidth(): number;

    /**
     * Sets the line width, in pixels, for measurement.
     * @param value The line width, in pixels, for measurement. Default value is 1.
     */
    set_MeasurementLineWidth(value: number): void;

    /**
     * Gets the unit of measure for measurements.
     */
    get_MeasurementDefaultUnitsOfMeasure(): Vintasoft.Imaging.Dicom.WebDicomUnitOfMeasureEnumJS;

    /**
     * Sets the unit of measure for measurements.
     * @param value The unit of measure for measurements. Default value is <b>Millimeters</b>.
     */
    set_MeasurementDefaultUnitsOfMeasure(value: Vintasoft.Imaging.Dicom.WebDicomUnitOfMeasureEnumJS): void;

    /**
     * Gets the tick distances for measurements.
     */
    get_MeasurementDefaultTickFactors(): number[];

    /**
     * Sets the tick distances for measurements.
     * @param value An array of ticks distances in WebDicomUnitOfMeasureEnumJS. Default value is [10, 50, 100].
     */
    set_MeasurementDefaultTickFactors(value: number[]): void;

    /**
     * Gets the color for measurements.
     */
    get_MeasurementColor(): string;

    /**
     * Sets the color for measurement.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_MeasurementColor(value: string): void;

    /**
     * Gets the mouse sensitivity.
     */
    get_MouseSensitivity(): number;

    /**
     * Sets the mouse sensitivity.
     * @param value The mouse sensitivity. Default value is 1.
     */
    set_MouseSensitivity(value: number): void;

    /**
     * Gets the mouse move delta for frame browsing.
     */
    get_BrowsePixelDelta(): number;

    /**
     * Sets the mouse move delta for frame browsing.
     * @param value The mouse move delta for frame browsing. Default value is 10 pixels.
     */
    set_BrowsePixelDelta(value: number): void;

    /**
     * Gets a mouse sensitivity, which must be used for changing the window level of DICOM image.
     */
    get_WindowLevelMouseSensitivity(): number;

    /**
     * Sets a mouse sensitivity, which must be used for changing the window level of DICOM image.
     * @param value The mouse sensitivity, which must be used for changing the window level of DICOM image. Default value is 2.5.
     */
    set_WindowLevelMouseSensitivity(value: number): void;

    /**
     * Gets the zoom step for DICOM image.
     */
    get_ZoomStep(): number;

    /**
     * Sets the zoom step for DICOM image.
     * @param value The zoom step from DICOM image. Default value is 0.01.
     */
    set_ZoomStep(value: number): void;

    /**
     * Gets a value indicating whether DICOM viewer should zoom DICOM image relative to an image center.
     */
    get_ZoomAtCenter(): boolean;

    /**
     * Sets a value indicating whether DICOM viewer should zoom DICOM image relative to an image center.
     * @param value True - DICOM viewer should zoom DICOM image relative to an image center; False - DICOM viewer should zoom DICOM image relative to the mouse position. Default value is false.
     */
    set_ZoomAtCenter(value: boolean): void;

    /**
     * Gets the measurements of focused image.
     */
    get_Measurements(): Vintasoft.Imaging.Dicom.WebDicomMeasurementJS[];

    /**
     * Gets the focused measurement.
     */
    get_FocusedMeasurement(): Vintasoft.Imaging.Dicom.WebDicomMeasurementJS;

    /**
     * Sets the focused measurement.
     * @param value The focused measurement.
     */
    set_FocusedMeasurement(value: Vintasoft.Imaging.Dicom.WebDicomMeasurementJS): void;

    // METHODS

    /**
     * Adds DICOM files to this DICOM viewer.
     * @param sources A string array that contains identifiers of DICOM files, which should be loaded in DICOM viewer.
     */
    addSources(sources: string[]): void;

    /**
     * Builds the rectangle measurement.
     */
    buildRectangleMeasurement(): Vintasoft.Imaging.Dicom.WebDicomMeasurementJS;

    /**
     * Builds the lines measurement.
     */
    buildLinesMeasurement(): Vintasoft.Imaging.Dicom.WebDicomMeasurementJS;

    /**
     * Builds the line measurement.
     */
    buildLineMeasurement(): Vintasoft.Imaging.Dicom.WebDicomMeasurementJS;

    /**
     * Builds the angle measurement.
     */
    buildAngleMeasurement(): Vintasoft.Imaging.Dicom.WebDicomMeasurementJS;

    /**
     * Builds the ellipse measurement.
     */
    buildEllipseMeasurement(): Vintasoft.Imaging.Dicom.WebDicomMeasurementJS;

    /**
     * Builds the cross measurement.
     */
    buildCrossMeasurement(): Vintasoft.Imaging.Dicom.WebDicomMeasurementJS;

    /**
     * Builds specified measurement.
     * @param measurement The measurement to build.
     */
    buildMeasurement(measurement: Vintasoft.Imaging.Dicom.WebDicomMeasurementJS): void;

    /**
     * Returns the measurements of specified DICOM image.
     * @param image The DICOM image.
     */
    getMeasurements(image: Vintasoft.Imaging.Dicom.WebDicomImageJS): Vintasoft.Imaging.Dicom.WebDicomMeasurementJS[];

    /**
     * Removes the measurements of focused image.
     */
    removeMeasurements(): void;

    /**
     * Removes the focused measurement.
     */
    removeFocusedMeasurement(): void;

    /**
     * Resets the view properties to the default values.
     */
    resetView(): void;

    /**
     * Scales an image to fit the width of viewer.
     */
    fitToWidth(): void;

    /**
     * Scales an image to fit the height of viewer.
     */
    fitToHeight(): void;

    /**
     * Scales the image proportion to the viewer.
     */
    bestFit(): void;

    /**
     * Updates the control.
     */
    update(): void;

    /**
     * Disposes this control.
     */
    dispose(): void;

  }

  /**
   * Represents a JavaScript UI control that allows to display DICOM images in HTML5 web browser.
   */
  class WebDicomViewerControlJS extends Vintasoft.Imaging.Dicom.WebDicomViewerBaseControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomViewerControlJS"] class.
     * @param parentDiv A parent DIV-element.
     */
    constructor(parentDiv: string);

    // PROPERTIES

    /**
     * Gets count of requesting images.
     */
    get_RequestingImageCount(): number;

    /**
     * Sets count of requesting images.
     * @param value 0 - DICOM viewer should request only visible image; N - DICOM viewer should request N images in one request and create new requests until all images will not be loaded.
     */
    set_RequestingImageCount(value: number): void;

    /**
     * Gets the index of focused DICOM image.
     */
    get_FocusedIndex(): number;

    /**
     * Sets the index of focused DICOM image.
     * @param value The zero-based index of focused DICOM image.
     */
    set_FocusedIndex(value: number): void;

    /**
     * Gets the interaction mode for the Left mouse button.
     */
    get_LeftButtonInteractionMode(): Vintasoft.Imaging.Dicom.WebDicomViewerInteractionModeEnumJS;

    /**
     * Sets the interaction mode for the Left mouse button.
     * @param value The interaction mode for the Left mouse button.
     */
    set_LeftButtonInteractionMode(value: Vintasoft.Imaging.Dicom.WebDicomViewerInteractionModeEnumJS): void;

    /**
     * Gets the interaction mode for the Right mouse button.
     */
    get_RightButtonInteractionMode(): Vintasoft.Imaging.Dicom.WebDicomViewerInteractionModeEnumJS;

    /**
     * Sets the interaction mode for the Right mouse button.
     * @param value The interaction mode for the Right mouse button.
     */
    set_RightButtonInteractionMode(value: Vintasoft.Imaging.Dicom.WebDicomViewerInteractionModeEnumJS): void;

    /**
     * Gets the interaction mode for the Middle mouse button.
     */
    get_MiddleButtonInteractionMode(): Vintasoft.Imaging.Dicom.WebDicomViewerInteractionModeEnumJS;

    /**
     * Sets the interaction mode for the Middle mouse button.
     * @param value The interaction mode for the Middle mouse button.
     */
    set_MiddleButtonInteractionMode(value: Vintasoft.Imaging.Dicom.WebDicomViewerInteractionModeEnumJS): void;

    /**
     * Gets the interaction mode for the XButton1 mouse button.
     */
    get_XButton1InteractionMode(): Vintasoft.Imaging.Dicom.WebDicomViewerInteractionModeEnumJS;

    /**
     * Sets the interaction mode for the XButton1 mouse button.
     * @param value The interaction mode for the XButton1 mouse button.
     */
    set_XButton1InteractionMode(value: Vintasoft.Imaging.Dicom.WebDicomViewerInteractionModeEnumJS): void;

    /**
     * Gets the interaction mode for the XButton2 mouse button.
     */
    get_XButton2InteractionMode(): Vintasoft.Imaging.Dicom.WebDicomViewerInteractionModeEnumJS;

    /**
     * Sets the interaction mode for the XButton2 mouse button.
     * @param value The interaction mode for the XButton2 mouse button.
     */
    set_XButton2InteractionMode(value: Vintasoft.Imaging.Dicom.WebDicomViewerInteractionModeEnumJS): void;

    /**
     * Gets a value indicating whether DICOM viewer should cycle the slide browsing, i.e. DICOM viewer should go to the first slide after last slide.
     */
    get_CycleSlideBrowsing(): boolean;

    /**
     * Sets a value indicating whether DICOM viewer should cycle the slide browsing, i.e. DICOM viewer should go to the first slide after last slide.
     * @param value <b>True</b> if DICOM viewer should cycle the slide browsing; otherwise, <b>false</b>. Default value is <b>true</b>.
     */
    set_CycleSlideBrowsing(value: boolean): void;

    /**
     * Gets a value indicating whether DICOM viewer should interpolate image.
     */
    get_ImageInterpolation(): boolean;

    /**
     * Sets a value indicating whether DICOM viewer should interpolate image.
     * @param value True if DICOM viewer should interpolate DICOM image; otherwise, false. Default value is true.
     */
    set_ImageInterpolation(value: boolean): void;

    /**
     * Gets the rulers, which are used in DICOM viewer.
     */
    get_Rulers(): void;

    /**
     * Gets a value indicating whether DICOM viewer should navigate by DICOM series using interaction mode "WebDicomViewerInteractionModeEnumJS.Browse".
     */
    get_NavigateBySeries(): boolean;

    /**
     * Sets a value indicating whether DICOM viewer should navigate by DICOM series using interaction mode "WebDicomViewerInteractionModeEnumJS.Browse".
     * @param value True - DICOM viewer browses frames in DICOM series; False - DICOM viewer browses images in image collection of DICOM viewer. Default value is True.
     */
    set_NavigateBySeries(value: boolean): void;

  }

  /**
   * Represents a JavaScript UI control that allows to display DICOM MPR in HTML5 web browser.
   */
  class WebDicomMprViewerControlJS extends Vintasoft.Imaging.Dicom.WebDicomViewerBaseControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomMprViewerControlJS"] class.
     * @param parentDiv A parent DIV-element.
     */
    constructor(parentDiv: string);

    // PROPERTIES

    /**
     * Gets the interaction mode for the Left mouse button.
     */
    get_LeftButtonInteractionMode(): Vintasoft.Imaging.Dicom.WebDicomMprViewerInteractionModeEnumJS;

    /**
     * Sets the interaction mode for the Left mouse button.
     * @param value The interaction mode for the Left mouse button.
     */
    set_LeftButtonInteractionMode(value: Vintasoft.Imaging.Dicom.WebDicomMprViewerInteractionModeEnumJS): void;

    /**
     * Gets the interaction mode for the Right mouse button.
     */
    get_RightButtonInteractionMode(): Vintasoft.Imaging.Dicom.WebDicomMprViewerInteractionModeEnumJS;

    /**
     * Sets the interaction mode for the Right mouse button.
     * @param value The interaction mode for the Right mouse button.
     */
    set_RightButtonInteractionMode(value: Vintasoft.Imaging.Dicom.WebDicomMprViewerInteractionModeEnumJS): void;

    /**
     * Gets the interaction mode for the Middle mouse button.
     */
    get_MiddleButtonInteractionMode(): Vintasoft.Imaging.Dicom.WebDicomMprViewerInteractionModeEnumJS;

    /**
     * Sets the interaction mode for the Middle mouse button.
     * @param value The interaction mode for the Middle mouse button.
     */
    set_MiddleButtonInteractionMode(value: Vintasoft.Imaging.Dicom.WebDicomMprViewerInteractionModeEnumJS): void;

    /**
     * Gets the interaction mode for the XButton1 mouse button.
     */
    get_XButton1InteractionMode(): Vintasoft.Imaging.Dicom.WebDicomMprViewerInteractionModeEnumJS;

    /**
     * Sets the interaction mode for the XButton1 mouse button.
     * @param value The interaction mode for the XButton1 mouse button.
     */
    set_XButton1InteractionMode(value: Vintasoft.Imaging.Dicom.WebDicomMprViewerInteractionModeEnumJS): void;

    /**
     * Gets the interaction mode for the XButton2 mouse button.
     */
    get_XButton2InteractionMode(): Vintasoft.Imaging.Dicom.WebDicomMprViewerInteractionModeEnumJS;

    /**
     * Sets the interaction mode for the XButton2 mouse button.
     * @param value The interaction mode for the XButton2 mouse button.
     */
    set_XButton2InteractionMode(value: Vintasoft.Imaging.Dicom.WebDicomMprViewerInteractionModeEnumJS): void;

  }

  /**
   * Represents a JavaScript UI-control that allows to display information about DICOM images, which are sorted by patient, study, series.
   */
  class WebDicomSeriesManagerControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomSeriesManagerControlJS"] class.
     * @param parentDiv A parent DIV-element.
     */
    constructor(parentDiv: string);

    // PROPERTIES

    /**
     * Gets the DICOM viewer control that is associated with this UI-control.
     */
    get_DicomViewerControl(): Vintasoft.Imaging.Dicom.WebDicomViewerControlJS;

    /**
     * Sets the DICOM viewer control that is associated with this UI-control.
     * @param value An instance of [see="WebDicomViewerControlJS"] class.
     */
    set_DicomViewerControl(value: Vintasoft.Imaging.Dicom.WebDicomViewerControlJS): void;

    /**
     * Gets the UI-control size, in surface space.
     */
    get_Size(): object;

    /**
     * Gets the scale for device pixel.
     */
    get_DevicePixelScale(): number;

    /**
     * Gets the identifier of the focused series.
     */
    get_FocusedSeriesIdentifier(): string;

    /**
     * Sets the identifier of the focused series.
     * @param value The value of set property.
     */
    set_FocusedSeriesIdentifier(value: string): void;

    /**
     * Gets a value indicating whether the keyboard navigation is enabled.
     */
    get_IsKeyboardNavigationEnabled(): boolean;

    /**
     * Sets a value indicating whether the keyboard navigation is enabled.
     * @param value <b>True</b> - keyboard navigation is enabled; <b>false</b> - keyboard navigation is disabled.<br />Default value is <b>true</b>.
     */
    set_IsKeyboardNavigationEnabled(value: boolean): void;

    /**
     * Gets the background color.
     */
    get_BackgroundColor(): string;

    /**
     * Sets the background color.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_BackgroundColor(value: string): void;

    /**
     * Gets the border width for a panel.
     */
    get_PanelBorderWidth(): number;

    /**
     * Sets the border width for a panel.
     * @param value The value of set property.
     */
    set_PanelBorderWidth(value: number): void;

    /**
     * Gets the default font for a text block.
     */
    get_TextBlockFontDefaultValue(): Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS;

    /**
     * Gets or sets the default font for a text block.
     * @param value The value of set property.
     */
    set_TextBlockFontDefaultValue(value: Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS): void;

    /**
     * Gets the text padding for text on a panel.
     */
    get_PanelTextPadding(): object;

    /**
     * Sets the text padding for text on a panel.
     * @param left Left text padding. Valid value is 0 and any positive value. Default value 0.
     * @param top Top text padding. Valid value is 0 and any positive value. Default value 0.
     * @param right Right text padding. Valid value is 0 and any positive value. Default value 0.
     * @param bottom Bottom text padding. Valid value is 0 and any positive value. Default value 0.
     */
    set_PanelTextPadding(value: number): void;

    /**
     * Gets the format string for patient text block.
     */
    get_PatientTextBlockFormat(): Vintasoft.Imaging.Dicom.WebDicomSeriesManagerTextLineJS[];

    /**
     * Sets the format string for patient text block.
     * @param value Default value is array with the following labels: "{PatientName}", "", "{PatientBirthDate:d}".
     */
    set_PatientTextBlockFormat(value: Vintasoft.Imaging.Dicom.WebDicomSeriesManagerTextLineJS[]): void;

    /**
     * Gets the fill color for patient panel.
     */
    get_PatientPanelFillColor(): string;

    /**
     * Sets the fill color for patient panel.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_PatientPanelFillColor(value: string): void;

    /**
     * Gets or sets the padding for patient panel.
     */
    get_PatientPanelPadding(): object;

    /**
     * Sets the padding for patient panel.
     * @param left Left text padding. Valid value is 0 and any positive value. Default value 0.
     * @param top Top text padding. Valid value is 0 and any positive value. Default value 0.
     * @param right Right text padding. Valid value is 0 and any positive value. Default value 0.
     * @param bottom Bottom text padding. Valid value is 0 and any positive value. Default value 0.
     */
    set_PatientPanelPadding(value: number): void;

    /**
     * Gets the format string for study text block.
     */
    get_StudyTextBlockFormat(): Vintasoft.Imaging.Dicom.WebDicomSeriesManagerTextLineJS[];

    /**
     * Sets the format string for study text block.
     * @param value Default value is array with the following labels: "{StudyDate} {StudyTime}", "{StudyDescription}", "{Modality}: {Runtime!SeriesCount} series".
     */
    set_StudyTextBlockFormat(value: Vintasoft.Imaging.Dicom.WebDicomSeriesManagerTextLineJS[]): void;

    /**
     * Gets the fill color for study panel.
     */
    get_StudyPanelFillColor(): string;

    /**
     * Sets the fill color for study panel.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_StudyPanelFillColor(value: string): void;

    /**
     * Gets the padding for study panel.
     */
    get_StudyPanelPadding(): object;

    /**
     * Sets the padding for study panel.
     * @param left Left text padding. Valid value is 0 and any positive value. Default value 0.
     * @param top Top text padding. Valid value is 0 and any positive value. Default value 0.
     * @param right Right text padding. Valid value is 0 and any positive value. Default value 0.
     * @param bottom Bottom text padding. Valid value is 0 and any positive value. Default value 0.
     */
    set_StudyPanelPadding(value: number): void;

    /**
     * Gets the format string for series text block.
     */
    get_SeriesTextBlockFormat(): Vintasoft.Imaging.Dicom.WebDicomSeriesManagerTextLineJS[];

    /**
     * Sets the format string for series text block.
     * @param value Default value is array with the following labels: "{SeriesDescription}".
     */
    set_SeriesTextBlockFormat(value: Vintasoft.Imaging.Dicom.WebDicomSeriesManagerTextLineJS[]): void;

    /**
     * Gets the fill color for 'series' panel.
     */
    get_SeriesPanelFillColor(): string;

    /**
     * Sets the fill color for 'series' panel.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_SeriesPanelFillColor(value: string): void;

    /**
     * Gets or sets the fill color for selected 'series' panel.
     */
    get_SelectedSeriesPanelFillColor(): string;

    /**
     * Gets or sets the fill color for selected 'series' panel.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_SelectedSeriesPanelFillColor(value: string): void;

    /**
     * Gets the padding for 'series' panel.
     */
    get_SeriesPanelPadding(): object;

    /**
     * Sets the padding for 'series' panel.
     * @param left Left text padding. Valid value is 0 and any positive value. Default value 0.
     * @param top Top text padding. Valid value is 0 and any positive value. Default value 0.
     * @param right Right text padding. Valid value is 0 and any positive value. Default value 0.
     * @param bottom Bottom text padding. Valid value is 0 and any positive value. Default value 0.
     */
    set_SeriesPanelPadding(value: number): void;

    /**
     * Gets the anchor for the 'series image count' label on series' thumbnail.
     */
    get_SeriesImageCountAnchor(): Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS;

    /**
     * Sets the anchor for the 'series image count' label on series' thumbnail.
     * @param value The value of set property.
     */
    set_SeriesImageCountAnchor(value: Vintasoft.Imaging.Primitives.WebAnchorTypeEnumJS): void;

    /**
     * Gets the font for the 'series image count' label on series' thumbnail.
     */
    get_SeriesImageCountFont(): Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS;

    /**
     * Sets the font for the 'series image count' label on series' thumbnail.
     * @param value The value of set property.
     */
    set_SeriesImageCountFont(value: Vintasoft.Imaging.Dicom.WebVintasoftFontPropertiesJS): void;

    /**
     * Gets the padding for the 'series image count' label on series' thumbnail.
     */
    get_SeriesImageCountPadding(): object;

    /**
     * Sets the padding for the 'series image count' label on series' thumbnail.
     * @param left Left text padding. Valid value is 0 and any positive value. Default value 0.
     * @param top Top text padding. Valid value is 0 and any positive value. Default value 0.
     * @param right Right text padding. Valid value is 0 and any positive value. Default value 0.
     * @param bottom Bottom text padding. Valid value is 0 and any positive value. Default value 0.
     */
    set_SeriesImageCountPadding(value: number): void;

    /**
     * Gets the thumbnail image border color for 'series' panel.
     */
    get_ThumbnailImageBorderColor(): string;

    /**
     * Sets the thumbnail image border color for 'series' panel.
     * @param value The string that represents HTML color ("black", "red", "transparent", "rgb(255,255,255)", "rgba(255,255,255,0.5)").
     */
    set_ThumbnailImageBorderColor(value: string): void;

    /**
     * Gets the thumbnail image border width for 'series' panel.
     */
    get_ThumbnailImageBorderWidth(): number;

    /**
     * Sets the thumbnail image border width for 'series' panel.
     * @param value The value of set property.
     */
    set_ThumbnailImageBorderWidth(value: number): void;

    /**
     * Gets the thumbnail image padding for 'series' panel.
     */
    get_ThumbnailImagePadding(): object;

    /**
     * Sets the thumbnail image padding for 'series' panel.
     * @param left Left text padding. Valid value is 0 and any positive value. Default value 0.
     * @param top Top text padding. Valid value is 0 and any positive value. Default value 0.
     * @param right Right text padding. Valid value is 0 and any positive value. Default value 0.
     * @param bottom Bottom text padding. Valid value is 0 and any positive value. Default value 0.
     */
    set_ThumbnailImagePadding(value: number): void;

    /**
     * Gets the thumbnail image size for 'series' panel.
     */
    get_ThumbnailImageSize(): object;

    /**
     * Sets the thumbnail image size for 'series' panel.
     * @param value The thumbnail image size - { width:number, height:number }.
     */
    set_ThumbnailImageSize(value: object): void;

    // METHODS

    /**
     * Scrolls to the series, which is specified by the series indentifier.
     * @param seriesIdentifier The series identifier.
     */
    scrollToSeries(seriesIdentifier: string): void;

    /**
     * Returns the series identifier at specified location in control space.
     * @param location The location - { x:number, y:number }.
     */
    getSeriesIdetifierByLocation(location: object): string;

    /**
     * Clears the thumbnail cache.
     */
    clearThumbnailsCache(): void;

    /**
     * Moves the focused image to the next image in the focused series.
     */
    moveToNextImage(): void;

    /**
     * Moves the focused image to the previous image in the focused series.
     */
    moveToPreviousImage(): void;

    /**
     * Moves the focused image to the next series.
     */
    moveToNextSeries(): void;

    /**
     * Moves the focused image to the previous series.
     */
    moveToPreviousSeries(): void;

    /**
     * Updates this UI-control.
     */
    update(): void;

  }

  /**
   * Represents settings for [see="WebDicomControlJS"] object.
   */
  class WebDicomControlSettingsJS extends Vintasoft.Imaging.UI.UIElements.WebUiControlSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomControlSettingsJS"] class.
     * @param containerId An identifier of the page element, where the DICOM control must be placed.
     * @param localizationId A localization identifier for [see="WebDicomControlJS"] object.
     */
    constructor(containerId: string, localizationId: string);

  }

  /**
   * Represents a JavaScript UI-control that contains UI (main menu, side panel, DICOM viewer) for displaying DICOM images in HTML5 web browser.
   */
  class WebDicomControlJS extends Vintasoft.Imaging.UI.UIElements.WebUiControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomControlJS"] class.
     * @param settings The settings for DICOM control.
     */
    constructor(settings: Vintasoft.Imaging.Dicom.WebDicomControlSettingsJS);

    // PROPERTIES

    /**
     * Gets a value indicating whether the control is enabled.
     */
    get_IsEnabled(): boolean;

    /**
     * Sets a value indicating whether the control is enabled.
     * @param value Value indicating whether the control is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets the DICOM viewer control, which is associated with this DICOM control.
     */
    get_DicomViewerControl(): Vintasoft.Imaging.Dicom.WebDicomViewerControlJS;

    /**
     * Gets the DICOM viewer control, which is associated with this DICOM control.
     */
    get_DicomSeriesManagerControl(): Vintasoft.Imaging.Dicom.WebDicomViewerControlJS;

    /**
     * Gets the initialized DICOM MPR controls.
     */
    get_DicomMprControls(): Vintasoft.Imaging.Dicom.WebDicomMprControlJS[];

    /**
     * Gets a value indicating whether main menu header is visible.
     */
    get_IsMainMenuHeaderVisible(): boolean;

    /**
     * Sets a value indicating whether main menu header is visible.
     * @param value A value indicating whether main menu header is visible.
     */
    set_IsMainMenuHeaderVisible(value: boolean): void;

    /**
     * Gets a value indicating whether main menu is visible.
     */
    get_IsMainMenuVisible(): boolean;

    /**
     * Sets a value indicating whether main menu is visible.
     * @param value A value indicating whether main menu is visible.
     */
    set_IsMainMenuVisible(value: boolean): void;

    /**
     * Gets a value indicating whether side panel is visible.
     */
    get_IsSidePanelVisible(): boolean;

    /**
     * Sets a value indicating whether side panel is visible.
     * @param value A value indicating whether side panel is visible.
     */
    set_IsSidePanelVisible(value: boolean): void;

    /**
     * Gets a value indicating whether main menu header is shown in full screen mode.
     */
    get_ShowMainMenuHeaderInFullscreenMode(): boolean;

    /**
     * Sets a value indicating whether main menu header is shown in full screen mode.
     * @param value A value indicating whether main menu header is shown in full screen mode.
     */
    set_ShowMainMenuHeaderInFullscreenMode(value: boolean): void;

    /**
     * Gets a value indicating whether main menu is shown in full screen mode.
     */
    get_ShowMainMenuInFullscreenMode(): boolean;

    /**
     * Sets a value indicating whether main menu is shown in full screen mode.
     * @param value A value indicating whether main menu is shown in full screen mode.
     */
    set_ShowMainMenuInFullscreenMode(value: number): void;

    /**
     * Gets a value indicating whether side panel is shown in full screen mode.
     */
    get_ShowSidePanelInFullscreenMode(): boolean;

    /**
     * Sets a value indicating whether side panel is shown in full screen mode.
     * @param value A value indicating whether side panel is shown in full screen mode.
     */
    set_ShowSidePanelInFullscreenMode(value: boolean): void;

    // METHODS

    /**
     * Adds DICOM files to this UI-control.
     * @param fileIds An array with identifiers of DICOM files.
     */
    addFiles(fileIds: string[]): void;

    /**
     * Clears cache for current HTTP session.
     */
    clearSessionCache(): void;

    /**
     * Switches the control's view to the full screen mode.
     */
    switchToFullscreenMode(): void;

    /**
     * Exits the control's view from the full screen mode.
     */
    exitFromFullscreenMode(): void;

    /**
     * Updates the user interface of this control.
     */
    updateUI(): void;

  }

  /**
   * Represents settings for [see="WebDicomMprControlJS"] object.
   */
  class WebDicomMprControlSettingsJS extends Vintasoft.Imaging.UI.UIElements.WebUiControlSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomMprControlSettingsJS"] class.
     * @param containerId An identifier of the page element, where the DICOM MPR control must be placed.
     * @param mprViewType The type of MPR view.
     * @param localizationId A localization identifier for [see="WebDicomMprControlJS"] object.
     */
    constructor(containerId: string, mprViewType: Vintasoft.Imaging.Dicom.WebMprViewTypeEnumJS, localizationId: string);

  }

  /**
   * Represents a JavaScript UI-control that contains UI (main menu, DICOM MPR viewers) for displaying DICOM MPR in HTML5 web browser. A JavaScript UI control that represents DICOM MPR viewer.
   */
  class WebDicomMprControlJS extends Vintasoft.Imaging.UI.UIElements.WebUiControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomMprControlJS"] class.
     * @param settings The settings for DICOM MPR control.
     * @param dicomControl The DICOM control, which is associated with this DICOM MPR control.
     */
    constructor(settings: Vintasoft.Imaging.Dicom.WebDicomMprControlSettingsJS, dicomControl: Vintasoft.Imaging.Dicom.WebDicomControlJS);

    // PROPERTIES

    /**
     * Gets a value indicating whether the control is enabled.
     */
    get_IsEnabled(): boolean;

    /**
     * Sets a value indicating whether the control is enabled.
     * @param value Value indicating whether the control is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets the DICOM control, which is associated with this DICOM MPR control.
     */
    get_DicomControl(): Vintasoft.Imaging.Dicom.WebDicomControlJS;

    /**
     * Gets the DICOM MPR viewer controls, which are associated with this MPR control.
     */
    get_DicomMprViewerControls(): Vintasoft.Imaging.Dicom.WebDicomMprViewerControlJS[];

    /**
     * Gets the focused DICOM MPR viewer control, which is associated with this MPR control.
     */
    get_FocusedDicomMprViewerControl(): Vintasoft.Imaging.Dicom.WebDicomMprViewerControlJS;

    /**
     * Gets a view type of this MPR control.
     */
    get_MprViewType(): Vintasoft.Imaging.Dicom.WebMprViewTypeEnumJS;

    /**
     * Gets a panel that contains MPR viewer controls.
     */
    get_DicomMprPanel(): Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS;

    /**
     * Gets a value indicating this DICOM MPR control is disposed.
     */
    get_IsDisposed(): boolean;

    /**
     * Gets a value indicating whether main menu header is visible.
     */
    get_IsMainMenuHeaderVisible(): boolean;

    /**
     * Sets a value indicating whether main menu header is visible.
     * @param value A value indicating whether main menu header is visible. Default value is True.
     */
    set_IsMainMenuHeaderVisible(value: boolean): void;

    /**
     * Gets a value indicating whether main menu is visible.
     */
    get_IsMainMenuVisible(): boolean;

    /**
     * Sets a value indicating whether main menu is visible.
     * @param value A value indicating whether main menu is visible. Default value is True.
     */
    set_IsMainMenuVisible(value: boolean): void;

    /**
     * Gets a value indicating whether main menu header is shown in full screen mode.
     */
    get_ShowMainMenuHeaderInFullscreenMode(): boolean;

    /**
     * Sets a value indicating whether main menu header is shown in full screen mode.
     * @param value A value indicating whether main menu header is shown in full screen mode. Default value is True.
     */
    set_ShowMainMenuHeaderInFullscreenMode(value: boolean): void;

    /**
     * Gets a value indicating whether main menu is shown in full screen mode.
     */
    get_ShowMainMenuInFullscreenMode(): boolean;

    /**
     * Sets a value indicating whether main menu is shown in full screen mode.
     * @param value A value indicating whether main menu is shown in full screen mode. Default value is True.
     */
    set_ShowMainMenuInFullscreenMode(value: number): void;

    // METHODS

    /**
     * Builds the rectangle measurement on focused viewer.
     */
    buildRectangleMeasurement(): void;

    /**
     * Builds the lines measurement on focused viewer.
     */
    buildLinesMeasurement(): void;

    /**
     * Builds the line measurement on focused viewer.
     */
    buildLineMeasurement(): void;

    /**
     * Builds the angle measurement on focused viewer.
     */
    buildAngleMeasurement(): void;

    /**
     * Builds the ellipse measurement on focused viewer.
     */
    buildEllipseMeasurement(): void;

    /**
     * Builds the cross measurement on focused viewer.
     */
    buildCrossMeasurement(): void;

    /**
     * Builds specified measurement on focused viewer.
     * @param measurementType The DICOM measurement type to build.
     */
    buildMeasurement(measurementType: Vintasoft.Imaging.Dicom.WebDicomMeasurementTypeEnumJS): void;

    /**
     * Removes the measurements of focused image on focused viewer.
     */
    removeMeasurements(): void;

    /**
     * Removes the focused measurement on focused viewer.
     */
    removeFocusedMeasurement(): void;

    /**
     * Switches the control's view to the full screen mode.
     */
    switchToFullscreenMode(): void;

    /**
     * Exits the control's view from the full screen mode.
     */
    exitFromFullscreenMode(): void;

    /**
     * Updates the user interface of this control.
     */
    updateUI(): void;

    /**
     * Disposes this control.
     */
    dispose(): void;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.Dicom.UI.Panels {

  // ===== CLASSES =====

  /**
   * A web UI panel that allows to display a DICOM viewer.
   */
  class WebDicomViewerPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomViewerPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets the DICOM viewer control that is associated with this panel.
     */
    get_DicomViewerControl(): Vintasoft.Imaging.Dicom.WebDicomViewerControlJS;

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * A web UI panel that allows to display a DICOM MPR viewer.
   */
  class WebDicomMprViewerPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomMprViewerPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets the DICOM MPR viewer control that is associated with this panel.
     */
    get_DicomMprViewerControl(): Vintasoft.Imaging.Dicom.WebDicomMprViewerControlJS;

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Disposes this panel.
     */
    dispose(): void;

  }

  /**
   * A web UI panel that allows to display a DICOM series manager.
   */
  class WebDicomSeriesManagerPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDicomSeriesManagerPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    // PROPERTIES

    /**
     * Gets the DICOM series manager control that is associated with this panel.
     */
    get_SeriesManagerControl(): Vintasoft.Imaging.Dicom.WebDicomSeriesManagerControlJS;

    /**
     * Gets the DICOM viewer control that is associated with DICOM series manager control.
     */
    get_DicomViewerControl(): Vintasoft.Imaging.Dicom.WebDicomViewerControlJS;

    /**
     * Sets the DICOM viewer control that is associated with DICOM series manager control.
     * @param value An instance of [see="WebDicomViewerControlJS"] class.
     */
    set_DicomViewerControl(value: Vintasoft.Imaging.Dicom.WebDicomViewerControlJS): void;

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * A web UI panel that allows to display metadata of DICOM image.
   */
  class WebUiDicomMetadataPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDicomMetadataPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param dicomViewerControl The DICOM viewer control.
     */
    constructor(settings: object, dicomViewerControl: Vintasoft.Imaging.Dicom.WebDicomViewerControlJS);

    // METHODS

    /**
     * Updates this panel.
     */
    update(): void;

  }

  /**
   * A web UI panel that allows to set custom window level in DICOM viewer.
   */
  class WebUiCustomDicomVoiLutPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiCustomDicomVoiLutPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param dicomViewerControl The DICOM viewer control.
     */
    constructor(settings: object, dicomViewerControl: Vintasoft.Imaging.Dicom.WebDicomViewerControlJS);

    // METHODS

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Retrieves window level from the user interface of this panel and sets the window level in DICOM viewer.
     */
    setWindowLevel(): void;

    /**
     * Resets window level and updates the user interface of this panel.
     */
    resetWindowLevel(): void;

  }

  /**
   * A web UI panel that allows to select the window level type in DICOM viewer.
   */
  class WebUiSelectDicomVoiLutTypePanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiSelectDicomVoiLutTypePanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param dicomViewerControl The DICOM viewer control.
     */
    constructor(settings: object, dicomViewerControl: Vintasoft.Imaging.Dicom.WebDicomViewerControlJS);

    // METHODS

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Set the DICOM viewer control for this panel.
     * @param dicomViewerControl An instance of WebDicomViewerControlJS class.
     */
    setDicomViewerControl(dicomViewerControl: Vintasoft.Imaging.Dicom.WebDicomViewerControlJS): void;

  }

  /**
   * A web UI panel that allows to select and show DICOM MPR dialog.
   */
  class WebUiSelectDicomMprDialogPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiSelectDicomMprDialogPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

}

