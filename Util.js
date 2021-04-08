function send_(email) {
  var MA_CV_ID = '1tfFIvfMJ1I61l4DT8PH4xIcvHbf7agcq';
  var Mohamed_AbdElhamid_Resume_OR_CV = DriveApp.getFileById(MA_CV_ID);
  var theSubject = "Software Development Engineer(Full Stack Java Developer)"
  
  if (!Mohamed_AbdElhamid_Resume_OR_CV) {
    console.error("Could not open file ");
    return;
  }
  var client = { email: email }
  var template = HtmlService.createTemplateFromFile('email-template');
  template.client = client;
  var message = template.evaluate().getContent();
  try{
     MailApp.sendEmail({ to: client.email, subject: theSubject, htmlBody: message, attachments: [Mohamed_AbdElhamid_Resume_OR_CV.getAs(MimeType.PDF)] });
return 1;

  }catch(e){ console.log(e); return -1}
  
}

function setIndex_(i)
{
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty('index', i);
}
function getIndex_()
{
  var scriptProperties = PropertiesService.getScriptProperties();
  //console.log((scriptProperties.getProperty('source')*1));
  return (scriptProperties.getProperty('index')*1);
}
