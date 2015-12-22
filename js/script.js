"use strict"

console.log("found JS")



$(function(){
	console.log("jquery loaded")

	$("#generate-button").on("click", function() {
		var numPara = $("#num-paragraphs").val()
		var numSen = $("#num-sentences").val()


		event.preventDefault()
		console.log("ALL ONE OR NONE, ALL ONE OR NONE")
		console.log("ALL ONE OR NONE, ALL ONE OR NONE")
		console.log("Requested "+numSen+" sentences in "+numPara+" paragraphs.")
	})

})