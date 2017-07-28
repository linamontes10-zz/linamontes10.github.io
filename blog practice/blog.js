class BlogEntry {
//name, blogText
	constructor (name, blogText){
		this.blogger_name = name;
		this.blog_text = blogText
	}

}

function addEntryToBlog() {
  //Create new blog entry
  	var name = document.getElementById("blogEntryName").value;
 	var blogText = document.getElementById("blogEntryText").value;
 	var blogEntry = new BlogEntry(name,blogText);

   



  //Add the new entry, name and date to the blog
	createBlogEntryElement(blogEntry);
	createFooterElement(blogEntry);
  //Clear the inputs

}

function createBlogEntryElement(blogEntry) {	
	var blogText = blogEntry.blog_text;
	var node = document.createElement("div");
	node.innerHTML = blogText;
	node.className = "blogEntry"; 
	blogDetails.appendChild(node);
}

function createFooterElement(blogEntry) {
	var name = blogEntry.blogger_name;
	var x = Date() 
	var node = document.createElement("div");
	node.innerHTML = "By " + name + " " + x; 
	node.className = "blogDate"
	blogDetails.appendChild(node);

}
