goog.provide('ol.style.Style');

goog.require('ol.style.Fill');
goog.require('ol.style.Image');



/**
 * @classdesc
 * Base class for vector feature rendering styles.
 *
 * @constructor
 * @param {olx.style.StyleOptions=} opt_options Style options.
 * @api
 */
ol.style.Style = function(opt_options) {

  var options = goog.isDef(opt_options) ? opt_options : {};

  /**
   * @private
   * @type {ol.style.Fill}
   */
  this.fill_ = goog.isDef(options.fill) ? options.fill : null;

  /**
   * @private
   * @type {ol.style.Image}
   */
  this.image_ = goog.isDef(options.image) ? options.image : null;

  /**
   * @private
   * @type {ol.style.Stroke}
   */
  this.stroke_ = goog.isDef(options.stroke) ? options.stroke : null;

  /**
   * @private
   * @type {ol.style.Text}
   */
  this.text_ = goog.isDef(options.text) ? options.text : null;

  /**
   * @private
   * @type {number|undefined}
   */
  this.zIndex_ = options.zIndex;

};


/**
 * @return {ol.style.Fill} Fill style.
 * @api
 */
ol.style.Style.prototype.getFill = function() {
  return this.fill_;
};


/**
 * @return {ol.style.Image} Image style.
 * @api
 */
ol.style.Style.prototype.getImage = function() {
  return this.image_;
};


/**
 * @return {ol.style.Stroke} Stroke style.
 * @api
 */
ol.style.Style.prototype.getStroke = function() {
  return this.stroke_;
};


/**
 * @return {ol.style.Text} Text style.
 * @api
 */
ol.style.Style.prototype.getText = function() {
  return this.text_;
};


/**
 * @return {number|undefined} ZIndex.
 * @api
 */
ol.style.Style.prototype.getZIndex = function() {
  return this.zIndex_;
};
