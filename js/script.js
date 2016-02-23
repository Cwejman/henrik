/*                                                                            */
/*                        J A V A S C R I P T   F O R                         */
/*                    H E N R I K W A L L G R E N . C O M                     */
/*                                                                            */
/*                  I S   T H I S   S C R I P T   L O S T ?                   */
/*       P E T   I T   W E L L   O R   R E T U R N   T O   M A S T E R :      */
/*                                                                            */
/*                   G I T H U B . C O M / C W E J M A N                      */
/*                                                                            */

// Runs on body load, iniitiated by html body dirrective
function main() {

  // Binds a function to cursor move on page document ( body )
  $('body').mousemove(function(e){

      // Center x and y coordinates of page ( body )
      var centerX = $(this).width() / 2;
      var centerY = $(this).height() / 2;

      // The following jquery manipulations work by getting two fractions of 1
      // ( ( center - cursor ) / center ), which tells where the cursor is.
      // These two fractions ranging from -1 to 1 ( x and y from center ) are
      // multiplied by a number make the paralaxing effect.

      // Futhest back layer
      $('#one').css('transform', 'translate(' +
        (centerX - e.pageX) / centerX * 5 + 'px ,' +
        (centerY - e.pageY) / centerY * 3 + 'px)');

      // Center layer
      $('#two').css('transform', 'translate(' +
        (centerX - e.pageX) / centerX * 13 + 'px ,' +
        (centerY - e.pageY) / centerY * 7 + 'px)');

      // Front layer
      $('#three').css('transform', 'translate(' +
        (centerX - e.pageX) / centerX * 30 + 'px ,' +
        (centerY - e.pageY) / centerY * 15 + 'px)');
  });
}
