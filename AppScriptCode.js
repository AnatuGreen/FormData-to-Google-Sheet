 const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1wugpx5COQWP0XUWDI5f-tvLiuZW-GYiyGcXXNFR-JOQ/edit#gid=0");
 //if you have changed your sheet name then replace the below Sheet1 with your sheet name
const sheet = sheets.getSheetByName("Page1");
function doPost(e){
  let data = e.parameter;
  sheet.appendRow([data.Name,data.Email,data.Message]);
  return ContentService.createTextOutput("Your message was successfully sent to the Googlesheet database!");
}
