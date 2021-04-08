function getNotDeliveredEmails_Trigger(){
  var t = "in:anywhere from:(mailer-daemon@google.com OR mailer-daemon@googlemail.com)";
  var arr = GmailApp.search(t, 0, 500);
  var refusedEmailsArray = [];
  arr.forEach(function (obj) {
    obj.getMessages().forEach(function (body) {
      if (body.getFrom().indexOf("mailer-daemon") !== -1) {
        var i = body.getPlainBody();
        refusedEmailsArray.push.apply(refusedEmailsArray, i.match(/[.\w-]+@([\w-]+\.)+[\w-]+/g));
        //console.error(r.getTo());
        //console.error(r.getFrom());
      }
    }
    )
  });
  var notFoundEmails = AceAlBastoni.unique(refusedEmailsArray)
  console.log(notFoundEmails.length);

  setContent_(notFoundEmails, '1qSNOsUfdsf5DJMw3ayr4g30fdsgq6-BTmOGF8aFp');
  AceAlBastoni.updateRemovedSheet(notFoundEmails);
}
function setContent_(emailsArray, FileId) {
  var str = "";
  for (var i = 0; i < emailsArray.length; i++) {
    str = str + i + ". " + emailsArray[i] + "\n";
  }
  DriveApp.getFileById(FileId).setContent(str);

}

