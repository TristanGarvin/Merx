const form=document.getElementById("form");$("#form").on("submit",a=>{a.preventDefault(),["emailHelp","passwordHelp","loginHelp"].forEach(a=>$(`#${a}`).text(""));const b=$("#email").val().trim(),c=$("#password").val().trim();b||$("#emailHelp").text("Your email address is required"),c||$("#passwordHelp").text("Your password is required");[b,c].some(a=>!a)||$.post("/api/login",{email:b,password:c}).then(()=>window.location.replace("/home")).catch(a=>{console.error(a),401===a.status?$("#loginHelp").text("Incorrect username or password"):$("#loginHelp").text("Error processing your request")})});