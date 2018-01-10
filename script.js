const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const SteamCommunity = require('steamcommunity')
const randomstring = require("randomstring");
const fs = require('fs');

var tempuser="";
var temppass="";
var tempmail="";
const client = new SteamUser();
const config = require('./config.json')
const community = new SteamCommunity();


const logOnOptions = {
	accountName: config.username,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.sharedsecret)
};

client.logOn(logOnOptions);

client.on('loggedOn', () =>{
	console.log("Logged On");
	client.setPersona(SteamUser.Steam.EPersonaState.Online);
	randacc();
});

function creationcallback() {
	var filename = tempuser+".txt";
	var stream = fs.createWriteStream(filename);
		stream.once('open', function(fd) {
		stream.write(tempuser+"\n");
		stream.write(temppass+"\n");
		stream.write(tempmail+"\n");
		stream.end();
	});
}

function randacc(){
	tempuser = randomstring.generate(13);
	temppass = randomstring.generate(14);
	tempmail = randomstring.generate(6)+"@sharklasers.com";
	client.createAccount(tempuser, temppass, tempmail, creationcallback);
	function creationcallback() {
		var filename = tempuser+".txt";
		var stream = fs.createWriteStream(filename);
			stream.once('open', function(fd) {
			stream.write(tempuser+"|");
			stream.write(temppass+"|");
			stream.write(tempmail);
			stream.end();
		});
	}
}