var App = React.createClass({
  render(){
    return(
    <div>
      <Navbar />
      <Content />
      <AboutUs />
      <MissionVision />
      <ServicesOffered />
      <Portfolio />
      <PlaceOrder />
      <Contact />
    </div>
      )
  }
});

    var Navbar = React.createClass({
        render: function() {
          return (
			<nav className="navbar navbar-default navbar-fixed-top">
			  <div className="container">
				<div className="navbar-header">
				  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span className="icon-bar"></span>  
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>                        
				  </button>
				  <a className="navbar-brand" href="#myPage"><span id="titleHeader">UmangMahilaTailors</span></a>
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
				  <ul className="nav navbar-nav navbar-right">
					<li><a href="index.html#about">ABOUT</a></li>
					<li><a href="index.html#services">SERVICES</a></li>
					<li><a href="index.html#portfolio">PORTFOLIO</a></li>
					<li><a href="index.html#place_order">PLACE AN ORDER</a></li>
					<li><a href="index.html#contact">CONTACT</a></li>
				  </ul>
				</div>
			  </div>
			</nav>
          )
        }
      });
     var Content = React.createClass({
        render: function() {
          return (
				<div className="jumbotron text-center">

				  <img src="assets/sewing-machine.png" className="img-circle margin" width="350" height="350"></img>
				  <h1>Umang Mahila Tailors</h1> 
				  <p>We specialize in custom tailoring</p> 
				
				  <form className="form-inline" action="http://www.umangmahilatailors.org/assets/php/subscribe.php" method="post">
					<input type="email" className="form-control" name="SubscribedEmail" id="SubscribedEmail" size="50" placeholder="Email Address" required></input>
					<button type="submit" className="btn btn-danger">Subscribe</button>
				  </form>
				</div>
	
          )
        }
      });
     var AboutUs = React.createClass({
        render: function() {
          return (
            <div id="about" className="container-fluid">
			  <div className="row">
				<div className="col-sm-8">
				  <h2>About Umang Mahila</h2><br></br>
				  <h4>During CRH's activities in Bherampada, we made a few civil society organizations(Mahila Mandal) and strengthened many more. This lead to the formation of Umang Mahila Federation, an Apex organization of 10 mandals.</h4><br></br>
				  <p>There are 450 women tailors in our community. They are doing the Tailoring Job works for almost all the leading brands in India. Due to the middlemen, these women are getting only mere part of the income. Which is not substaniable. So, we at CRH are trying to organize the women and empower them for better income source.</p>
				  <br></br><a href="#contact" className="btn btn-default btn-lg">Get in Touch</a>
				</div>
				<div className="col-sm-4">
				  <span className="glyphicon glyphicon-scissors logo"></span>
				</div>
			  </div>
			</div>
          )
        }
      });
	  var MissionVision = React.createClass({
        render: function() {
          return (
				<div className="container-fluid bg-grey">
				  <div className="row">
					<div className="col-sm-4">
					  <span className="glyphicon glyphicon-globe logo slideanim"></span>
					</div>
					<div className="col-sm-8">
					  <h2>Our Values</h2><br></br>
					  <h4><strong>MISSION:</strong> Our mission is to create an organized skilled-worker community. Find better source of income for these women.</h4><br></br>
					  <p><strong>VISION:</strong> Our vision is to create a home-based income source for the 450 women tailors of Umang Mahila Federation, Bherampada. These women have worked for many well-known brands, but end up getting paid less because of the middlemen who take away major portion of their income. We aim to create jobs for these women, so that they can earn and provide to their households, all without losing a penny to any middlemen.<br></br><br></br>Umang Mahila Federation also runs a tailoring class, to give proper training to the upcoming tailors in the community. Umang Mahila Tailors plan to increase their current community level, using their present skillsets to create better income source for all.</p>
					</div>
				  </div>
				</div>
          )
        }
      });
	var ServicesOffered = React.createClass({
        render: function() {
          return (
		  
				<div id="services" className="container-fluid text-center">
				<h2>SERVICES</h2> <br></br>
				<h4>Tailoring <big>/</big> Alteration</h4> <br></br>
					<div className="row slideanim">
						<div className="col-sm-4">
							      <span className="label logo-small">1</span>
								  <h4>You place an order!</h4>
								  <p>Using any of the <a href="#place_order">order methods</a> available..</p>
						</div>
						<div className="col-sm-4">
								  <span className="label logo-small">2</span>
								  <h4>Our Tailor visits your home</h4>
								  <p>Takes Measurement and collects the material.</p>
						</div>
						<div className="col-sm-4">
								  <span className="label logo-small">3</span>
								  <h4>Delivery at your doorstep</h4>
								  <p>Our guys stitch/alters the cloth, get it delivered at your residence and collects the money.</p>
						</div>
					</div>
					<br></br><br></br>
				</div>
			
          )
        }
      });
	  
     var Footer = React.createClass({
        render: function() {
          return (
            <footer className="container-fluid text-center">
			  <a href="#myPage" title="To Top">
				<span className="glyphicon glyphicon-chevron-up"></span>
			  </a>
			  <div itemscope itemtype="http://schema.org/CreativeWork">
			  <p> A <span itemprop="copyrightHolder">CRH Mumbai</span> Initiative. All Rights Reserved.</p>
			  <p>Bootstrap Theme Build By <a href="http://umangmahilatailors.org/author/" target="_blank" title="About Rohit Nair" itemprop="creator">Rohit Nair</a></p>
			  </div>
			</footer>
          )
        }
      });
	  var Contact = React.createClass({
        render: function() {
          return (
					<div id="contact" className="container-fluid bg-grey" >
					  <h2 className="text-center">CONTACT</h2>
					  <div className="row">
						<div className="col-sm-5">
						  <p>Contact us and we'll get back to you immediately.</p>
						  <p><span className="glyphicon glyphicon-map-marker"></span> Mumbai, IN</p>
						  <p><span className="glyphicon glyphicon-phone"></span> +91 9969520439</p>
						  <p><span className="glyphicon glyphicon-envelope"></span> <a className="inheritedLink" href="mailto:order@umangmahilatailors.org">mail@umangmahilatailors.org</a></p>
						</div>
						<form method="post" action="assets/php/requestcontact.php">
						<div className="col-sm-7 slideanim">
						  <div className="row">
							<div className="col-sm-6 form-group">
							  <input className="form-control" id="name" name="name" placeholder="Name" type="text" required></input>
							</div>
							<div className="col-sm-6 form-group">
							  <input className="form-control" id="email" name="email" placeholder="Email" type="email" required></input>
							</div>
						  </div>
						  <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br></br>
						  <div className="row">
							<div className="col-sm-12 form-group">
							  <button className="btn btn-default pull-right" type="submit">Send</button>
							</div>
						  </div>
						</div>
						</form>
					  </div>
					</div>
          )
        }
      });	  
   var PlaceOrder = React.createClass({
        render: function() {
          return (
	
	<div id="place_order" className="container-fluid">
  <div className="text-center">
    <h2>Place an Order</h2>
    <h4>Choose an order method that suits you</h4>
  </div>
  <div className="row slideanim">
    <div className="col-xs-12 col-sm-12 col-md-8 ">
      <div className="panel panel-default">
        <div className="panel-heading text-center">
          <h1>Online Order</h1>
        </div>
     <form method="post" action="http://umangmahilatailors.org/assets/php/onlineOrder.php">
        <div className="panel-body">
        <div className="row_space"></div>
          <p><strong>Your Name <big className="text-danger">*</big></strong> <input className="form-control" id="name" name="name" placeholder="Your Name" type="text" required></input></p>
          <div className="row_space"></div>
          <p><strong>Email ID <big className="text-danger">*</big></strong> <input className="form-control" id="OrderEmail" name="OrderEmail" placeholder="Your Email ID" type="text" required></input></p>
          <div className="row_space"></div>
          <p><strong>Contact Number (primary) <big className="text-danger">*</big></strong> <input className="form-control" id="Contact1" name="Contact1" placeholder="Contact Number" type="text" required></input></p>
          <div className="row_space"></div>
          <p><strong>Contact Number (secondary)</strong> <input className="form-control" id="Contact2" name="Contact2" placeholder="Fall Back Contact Number" type="text"></input></p>
          <div className="row_space"></div>
          <p><strong>Your Street Address <big className="text-danger">*</big></strong> <textarea className="form-control" id="OrderAddress" name="OrderAddress" placeholder="Your Precise Street Address" required></textarea> </p>
          <div className="row_space"></div><div className="row_space-10"></div>
         <span className="text-danger pull-left"><big>*</big> Required Fields</span>
          <button className="btn btn-lg btn-inner-orange pull-right">Place the Order</button>
        </div>
     </form>

          <div className="row_space-10"></div>
      </div>      
    </div>     
      
    <div className="col-xs-12 col-sm-12 col-md-4">
      <div className="panel panel-default text-center" itemscope itemtype="http://schema.org/PostalAddress">
      
        <div className="panel-heading">
          <h1>Offline Order</h1>
        </div>

        <div className="panel-body">
       
          <p><strong>Walk Into Our store</strong></p>
          <p><address><span itemprop="address"><span itemprop="streetAddress">PPC Chawl, Plot No: 341, Nr. Ram Mandir, Oppo. Vijay Gas Service</span>, <span itemprop="addressRegion">Kherwadi</span>, <span itemprop="addressLocality">Bandra(East)</span>
      <span itemprop="postalCode">400 051</span></span> </address>
    </p>
    
          <p><strong>Call Us</strong></p>
          <p><span itemprop="telephone">+91 2265650326</span> </p>
          <p><span itemprop="telephone">+91 9969520439</span> </p>
          <p><strong>Email Us</strong></p>
          <p><a className="inheritedLink" href="mailto:order@umangmahilatailors.org" itemprop="email">order@umangmahilatailors.org</a></p>
        
        </div>
        <hr></hr>
        <h2>OR</h2>
      <div className="panel-footer">
  
          <h3>Order via Email!</h3>
          <h4><strong> You can place an email order instead!</strong></h4>
          <button type="button" className="btn btn-lg" data-toggle="modal" data-target="#myModal">Mail Us</button>
        </div>
      </div>      
    </div>    
  </div>
</div>
          )
        }
      });	  
     var Portfolio = React.createClass({
        render: function() {
          return (
					<div id="portfolio" className="container-fluid text-center bg-grey">
					  <h2>Portfolio</h2><br></br>
					  <h4>What we stitch</h4>
					  <div className="row text-center slideanim">
						<div className="col-sm-4">
						  <div className="thumbnail">
							<img src="http://umangmahilatailors.org/assets/images/web2.jpg" className="images" alt="Paris"></img>
							<p><strong>Blouse Material</strong></p>
						  </div>
						</div>
						<div className="col-sm-4">
						  <div className="thumbnail">
							<img src="http://umangmahilatailors.org/assets/images/web3.jpg" className="images" alt="New York"></img>
							<p><strong>Churidaar</strong></p>
						  </div>
						</div>
						<div className="col-sm-4">
						  <div className="thumbnail">
							<img src="http://umangmahilatailors.org/assets/images/web4.jpg" className="images" alt="San Francisco"></img>
							<p><strong>Salwaar Kameez</strong></p>
						  </div>
						</div>
					  </div>
					  <br></br>
						 <div className="row">
						<div className="col-sm-12 alert alert-info">
						  <h3>We alter all types of cloth!</h3>
						</div>
					</div>
					<br></br>
					
					
					  <h2>What our supporters say</h2>
						  <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
							
							<ol className="carousel-indicators">
							  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
							  <li data-target="#myCarousel" data-slide-to="1"></li>
							  <li data-target="#myCarousel" data-slide-to="2"></li>
							</ol>

							<div className="carousel-inner" role="listbox">
							  <div className="item active">
								<h4>"Hats Off! To this Novel initiative"<br></br><span className="font_normal"><div className="row_space-5"></div>Bro. Mathew Kuplicat, Associate director, MCDS Chennai</span></h4>
							  </div>
							  <div className="item">
								<h4>"One word... Brilliant!!"<br></br><span className="font_normal"><div className="row_space-5"></div> Sobha Sarath, Supervisor, CRH Mumbai</span></h4>
							  </div>
							  <div className="item">
								<h4>"Excellent Initiative by CRH!"<br></br><span className="font_normal"><div className="row_space-5"></div> Jayan Mitra, Secretary, GandhiServe India</span></h4>
							  </div>
							</div>
						  </div>
					
					</div>
					
          )
        }
      });

      ReactDOM.render(
        <App/>,
        document.getElementById('app')
      ); 

	  ReactDOM.render(
        <Footer/>,
        document.getElementById('footer')
      );
