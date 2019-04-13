var audioFlg = true;
var audio = document.createElement("audio");
audio.addEventListener('ended', function() {
	audioFlg = true;
}, false);

function displayVoice(zhText) {

	if(audioFlg) {
		audioFlg = false;
		zhText = encodeURI(zhText);
		audio.src = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=6&text=" + zhText;
		audio.play();
	} else {
		setTimeout(function() {
			displayVoice(zhText);
		}, 5000);
	}
}
function displayVoice2(zhText) {
	displayVoice(zhText);
	mui.toast(zhText);
}