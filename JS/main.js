$("document").ready(function () {
    button_main=$(".intro_button").parent();
    $(".intro_button").click(function() {
      button_main.append(
          button_main.find(".intro_button").first()
      )
    });
});