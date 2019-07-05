$(document).ready(() => {
  $(".invalid-feedback").hide();
  $(".valid-feedback").hide();
});
// Initialize Firebase
/**
 *
 * @param {String} title
 * @description saveTask used to save tasks in firebase by writing task title then click on save button
 */
const saveToFireBase = title => {
  firebase
    .database()
    .ref("tasks/")
    .push({
      title
    });
};
const saveTask = () => {
  //get task title
  let title = $("#taskTitle").val();
  //removing spaces before/after entered string
  let filteredTitle = title.trim();
  if (filteredTitle.length === 0) {
    $("#taskTitle").addClass("is-invalid");
    $(".invalid-feedback").show();
  } else {
    saveToFireBase(title);
    $("#taskTitle").removeClass("is-invalid");
    $("#taskTitle").addClass("is-valid");
    $(".valid-feedback").show();
    $("#taskTitle").val("");
    setTimeout(() => {
      $(".valid-feedback").hide();
      $("#taskTitle").removeClass("is-valid");
    }, 2000);
  }
};
