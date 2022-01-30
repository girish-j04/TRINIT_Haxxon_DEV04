var fs = require("fs");
const keys = require("./keys");
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const perf = require("execution-time")();
const isOnline = require('is-online');




puppeteer.use(StealthPlugin());
var indicate = "starting";
console.log(indicate);

var email = keys.email;
var pass = keys.pass;
var head = keys.head;
var email_count = keys.email_count;

var browser;
var page;

console.log(indicate);
async function hackathon() {
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      console.log('START')
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  try {
    indicate = head ?
      "lauching browser headless(No GUI)" :
      "lauching browser normal";
    console.log(indicate);
    

    browser = await puppeteer.launch({
      executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      headless: head,
      args: [
        // '--headless',
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--use-fake-ui-for-media-stream",
        "--disable-audio-output",
        '--disable-infobars',
        '--window-position=0,0',
        '--ignore-certifcate-errors',
        '--ignore-certifcate-errors-spki-list',
        '--user-agent=" Chrome/65.0.3312.0"'
      ],
    
    });

  

    page = await browser.newPage();
    console.log("Connecting to Outlook");
    await page.goto("https://login.live.com/");

    // Login Start
    console.log("Retrieving Provided Credentials");

    await page.type("input#i0116", email, {
      delay: 0,
    });

    await page.click("input#idSIButton9");

    await page.waitFor(1000);
    
    await page.type("input#i0118", pass, {
      delay: 0,
    });
    await page.click("input#idSIButton9");
    await page.waitForSelector("input#idSIButton9");
    
    console.log("Authenticating...");
    await page.click("input#idSIButton9");
    await page.waitFor(5000)
    await page.keyboard.press("Enter")
    

    await page.waitForNavigation({
      waitUntil: "networkidle0",
    });

    console.log("Authenticated")

    
    console.log("Retrieving Email");
    await page.goto("https://outlook.live.com/people/0/", {
      waitUntil: "load",
      timeout: 0,
    });


    try {
      await page.waitForSelector("div._2foTEDMhzh_Jsee7capEtt");
      
      await page.click("div._2foTEDMhzh_Jsee7capEtt");
      

      await page.waitFor(5000);
      await page.click('[title="Toggle Left Pane"]')

      await page.waitFor(3000);
      await page.waitForSelector('[title="Default folder for your saved contacts and contact lists"]');
      await page.click('[title="Default folder for your saved contacts and contact lists"]')

      await page.waitForSelector("div._2foTEDMhzh_Jsee7capEtt");
      
      await page.click("div._2foTEDMhzh_Jsee7capEtt");
      await page.waitFor(3000);
      await page.click('[data-icon-name="Cancel"]')

      console.log("Loading, Please wait....")


      await page.click('[data-icon-name="StatusCircleCheckmark"]')
      await page.waitFor(3000);
      await page.click('[data-icon-name="Delete"]')

      await page.waitFor(3000);
      
      await page.click('.ms-Button.ms-Button--primary')
      await page.waitFor(5000);

      await page.waitFor(2000);
    } 
    catch (error) {

    }
// ******************************************************************************************

    try {
      
      await page.waitFor('.ms-Button.ms-Button--action.ms-Button--command:last-child')
      await page.evaluate(async ()=>{
        document.querySelector('.ms-Button.ms-Button--action.ms-Button--command:last-child').click()
      });

      await page.waitForSelector('input[accept=".csv"]');
      await page.waitFor(1000);
      const inputUploadHandle = await page.$('input[accept=".csv"]');
      let fileToUpload = "csvfiles\\contacts.csv";

      console.log("Searching for LinkedIn profile")

      inputUploadHandle.uploadFile(fileToUpload);
      await page.waitForSelector('.ms-Button.ms-Button--primary')
      await page.evaluate(async ()=>{
        document.querySelector('.ms-Button.ms-Button--primary').click()
      });
      await page.waitFor(5000);
      await page.evaluate(() => {
        location.reload(true)
      })
      
      await page.waitFor(2000);
      await page.waitForSelector("div._2foTEDMhzh_Jsee7capEtt", {timeout: 5000});
      await page.click("div._2foTEDMhzh_Jsee7capEtt");
    } catch (err) {
        console.log(err);
    }
//       var mail = await page.evaluate(async () => {
//         email = document.querySelector('[data-log-name="PersonName"]')
//           .innerText;

//         return email;
//       });
//       var Email = mail;

//     } catch (error) {
//       console.log(error);
//     }
//     await page.waitForSelector('button[data-content="LinkedIn"]');

//     await page.click('button[data-content="LinkedIn"]');

//     console.log("Almost there")

//    try { await page.waitForSelector('button[aria-label="See full profile on LinkedIn. Opens in a new browser tab"]')
//     await page.click('button[aria-label="See full profile on LinkedIn. Opens in a new browser tab"]')
//     await page.waitFor(4000);

//     let pages = await browser.pages();

//     // const aHandle = await pages[2].evaluateHandle(() => document.body);

//     // const resultHandle = await pages[2].evaluateHandle(body => 
//     // body.innerHTML, aHandle);

//     // let jsonValue = await resultHandle.jsonValue();

//     const linkedUrl = await pages[2].url();
//     console.log("Your linkedin url for " + Email + " is: "+linkedUrl.split('?')[0])
//     pages[2].close()
//   } catch(err){
//       console.log('There is no LinkedIn Account associated with the provided Email ID.')
//   }
  
  var i = 1
  for(i=1; i< email_count; i++) {
    console.log("going to " + "contact " + i);
    await page.waitFor(2000);
    var isOn = await isOnline()
    if(isOn == false){
      sleep(180000);
      isOn = await isOnline()
    }
    if(isOn){
    await page.waitForSelector('i[data-icon-name="Down"]');
    await page.click('i[data-icon-name="Down"]');
    console.log("wait for page load for 2 seconds");
    await page.waitFor(2000);
    var mail = await page.evaluate(async () => {
        email = document.querySelector('[data-log-name="PersonName"]')
          .innerText;

        return email;
      });
      var Email = mail;
    }
  
    await page.waitForSelector('button[data-content="LinkedIn"]');
      // await page.waitFor(7000)
      console.log("selecting linkedin tab");
      await page.click('button[data-content="LinkedIn"]');
  
      console.log("Almost there...");
  
  
   try { await page.waitForSelector('button[aria-label="See full profile on LinkedIn. Opens in a new browser tab"]')
    await page.click('button[aria-label="See full profile on LinkedIn. Opens in a new browser tab"]')
    await page.waitFor(4000);

    let pages = await browser.pages();

    // const aHandle = await pages[2].evaluateHandle(() => document.body);

    // const resultHandle = await pages[2].evaluateHandle(body => 
    // body.innerHTML, aHandle);

    // let jsonValue = await resultHandle.jsonValue();

    const linkedUrl = await pages[2].url();
    console.log("Your linkedin url for " + Email + " is: "+linkedUrl.split('?')[0])
    pages[2].close()
    //return
  } catch(err){
      console.log('There is no LinkedIn Account associated with the provided Email ID.')
  }
  
  } 


  } 
  catch (err) {
    console.log(err);
    await browser.close();
  }
}

hackathon();
