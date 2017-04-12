$(function(){
	var cNote = document.getElementById('c_audio');
	var dNote = document.getElementById('d_audio');
	var eNote = document.getElementById('e_audio');
	var fNote = document.getElementById('f_audio');
	var gNote = document.getElementById('g_audio');
	var aNote = document.getElementById('a_audio');
	var bNote = document.getElementById('b_audio');
	$('#c').mousedown(function(){
		cNote.currentTime = 0;
		cNote.play();
	});
	$('#d').mousedown(function(){
		dNote.currentTime = 0;
		dNote.play();
	});
	$('#e').mousedown(function(){
		eNote.currentTime = 0;
		eNote.play();
	});
	$('#f').mousedown(function(){
		fNote.currentTime = 0;
		fNote.play();
	});
	$('#g').mousedown(function(){
		gNote.currentTime = 0;
		gNote.play();
	});
	$('#a').mousedown(function(){
		aNote.currentTime = 0;
		aNote.play();
	});
	$('#b').mousedown(function(){
		bNote.currentTime = 0;
		bNote.play();
	});
})
