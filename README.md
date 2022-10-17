<h1>1.What is Middleware?</h1>
<ul>
<li>
Middleware functions are the functions that access to the request and response object(req,res) in request-response cycle.
</li>
<li>
Express.js Middleware are different types of functions that are invoked by the Express.js routing layer before the final request handler.</li>
<li>
As the name specified,Middleware appears in the middle between an initial request and intended route.</li>
<li>
In stack,middleware functions are always invoked in the order in which they are added.</li>
<li>
Middleware is commonly used to perform tasks like body parsing for URL-encoded or JSON requests,cookie parsing for basic cookie handling,or even bilding Javascript modules on the fly.</li>
<h4>A middleware function can perform the following task.</h4>
<ul>
<li>
It can execute any code</li>
<li>
It can make changes to the request and the response objects</li>
<li>
It can end the request-response cycle</li>
<li>
It can call the next middleware *function in the stack</li>
</ul>