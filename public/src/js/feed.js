let shareImageButton = document.querySelector("#share-image-button");
let createPostArea = document.querySelector("#create-post");
let closeCreatePostModalButton = document.querySelector(
	"#close-create-post-modal-btn"
);

function openCreatePostModal() {
	createPostArea.style.display = "block";
	if (deferred) {
		deferred.prompt();
		deferred.userChoice.then(function (choiceResult) {
			console.log(choiceResult.outcome)
			if (choiceResult.outcome === "dismissed") console.log("user not installed the app to homescreen");
			else console.log("user installed the app to homescreen")
		});
	}
}

function closeCreatePostModal() {
	createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);
