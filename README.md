# **Team-HaxxOn DEV04 Tri-NIT Hackathon**

### **Problem Statement: Derive a user’s LinkedIn Profile URL as Output using only the linked e-mail address as input.**
### We solved this PS using a CLI through node.js

### Our approach is to use Outlook to retrieve a person's LinkedIn url through their associated email id.
</br>

# **Tech Stack and Pre-requisites**
- node.js
- puppeteer-extra
- puppeteer-extra-plugin-stealth
- Chrome Browser

# **How to run**
1. ### Clone the repo to your system.
`git clone https://github.com/girish-j04/TRINIT_Haxxon_DEV04.git`

2. ### Install the node packages.
`npm install`

### **Note: If you haven't installed chrome on the default location, add the correct path to the bharatx.js file on line 42 before running the bharatx.js file.**

### Your path to the chrome.exe file should be added similar to what is shown by the image below.
![pic](pic1.PNG)

3. ### Add the Email Ids to ./csvfiles/contacts.csv file. 
**Note that multiple email ids can be fed into the csv file, but only after the dummy id "1aaa@aaa.com" and also do not change the "E-mail Address" header and the dummy email id in the file.**

4. ###  Open keys.js and update the value of the variable "email_count" to the number of email ids you have given.

5. ### Now run the bharatx.js script in the same directory.
`node bharatx`

6. ### The linkedin url associated with the given email id will be printed on the command line.

</br>

## **Drive Link for the live implementation:**
https://drive.google.com/drive/folders/1Ejx1wosxo3HuqRobz8ALrFjK3gGurQi8?usp=sharing 

</br>

# **Team Members**

- ## Olan Pinto
- ## Vaishnav Ajai
- ## Girish Jeswani