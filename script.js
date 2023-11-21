// Function to add a comment
function addComment() {
  const commentInput = document.getElementById("commentInput");
  const commentText = commentInput.value;

  if (commentText !== "") {
    addCommentToStorage(commentText);
    displayComments();
    commentInput.value = "";
  }
}

// Function to add a comment to local storage
function addCommentToStorage(comment) {
  let comments = [];
  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"));
  }
  comments.push(comment);
  localStorage.setItem("comments", JSON.stringify(comments));
}

// Function to display comments from local storage
function displayComments() {
  const commentList = document.getElementById("commentList");
  commentList.innerHTML = "";

  let comments = [];
  if (localStorage.getItem("comments")) {
    comments = JSON.parse(localStorage.getItem("comments"));
  }

  comments.forEach(comment => {
    const li = document.createElement("li");
    li.innerText = comment;
    commentList.appendChild(li);
  });
}

// Display comments on page load
displayComments();
