<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../../assets/ico/favicon.png">

    <title>SoundStones</title>
    	<link rel="stylesheet" href="css/app.css" type="text/css" />
	<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/hot-sneaks/jquery-ui.css" type="text/css" />
	
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js" charset="utf-8"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.min.js"></script>
<script src="js/jquery.ui.touch-punch.min.js"></script>
<link rel="stylesheet" href="buttons/css/font-awesome.min.css">
<link rel="stylesheet" href="buttons/css/buttons.css">
<script type="text/javascript" src="buttons/js/buttons.js"></script>

<script src="js/tuna-master/tuna.js"  ></script> 
<script src="js/app.js"  ></script> 
<script src="js/rubberband_selection2.js"  ></script> 
<script src="js/jquery_collision/jquery-collision.min.js"  ></script> 

    <!-- Bootstrap core CSS -->
    <link href="bootstrap-3.0.0/dist/css/bootstrap.css" rel="stylesheet">

    <!-- Custom styles for this template -->
   
    <link rel="stylesheet" href="css/mobile.css" media="only screen and (max-width: 480px)">
<link rel="stylesheet" href="css/app.css" media="only screen and (min-width: 480px)">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="../../assets/js/html5shiv.js"></script>
      <script src="../../assets/js/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">SoundStones</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a  data-toggle="modal"  href="#about-modal">About</a></li>
              <li><a  >Requires recent Chrome or Safari web browsers.</a></li>                <li><img id = "browser-disclaimer" src="imgs/browserdisclaimer.png" alt="web browser disclaimer"></li>

          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>

    <div class='button-container'>
    <span class="button-wrap" "button glow "><a href="#" class="button button-circle button-primary" id='create-synth'></a></span>


<a data-toggle="modal" href="#save-patch-modal"   class="button glow button-rounded button-flat" id='save' >Save</a>
<a href="#" class="button glow button-rounded button-flat" id='lock'>Lock</a>
<a href="#" class="button glow button-rounded button-flat" id='delete-all'>Delete</a>
<a href="#" class="button glow button-rounded button-flat" id='mute-all'>Mute</a>
<img class= "mute-image" src="imgs/mute.png" alt="web browser disclaimer" height="22" width="22">



</div>
<!--Modal start-->

  
  <!-- Modal -->
  <div class="modal fade" id="save-patch-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">Add a name for your instrument</h4>
        </div>
        <div class="modal-body">
        <form>
         <input id='instrument-name-form'>
        </form>
        </div>

          <input type="submit" id='save-synths' class="btn btn-default" data-dismiss="modal"></button>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->  
  

      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->


<!--Modal end-->


  <!-- About Modal -->
  <div class="modal fade" id="about-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content" id='about-modal-content'>
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <p class="modal-title">This is a small application portfolio piece written by William Turner</p><br><p>To get started just click the big blue button!</p>  <br><p class="modal-title">Skills and technologies employed include Javascript & PHP programming with basic CRUD (create,read,update,delete) principals, AJAX for Javascript and PHP communication, MySQL table relation writing and programming.Web Audio API, Bootstrap, JQuery,Dom manipulation, CSS 3 responsive design and media queries. The program allows for user created oscillator based sound patches. These are saved to a database and can be recalled later. The app has rubber-band selecting, lock/mute/delete buttons for each patch,draggable 'oscillator' div blocks and users can modify the pitch of each oscillator by note and octave values. </p><br><p><a href="http://www.helpknow.com/resume.pdf">More about the developer</a>
         </p>
        </div>
        <div class="modal-body">
        </div>


        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->  
  

      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->


<!--About Modal end-->







    <div class="container">
<div class = "application-area-container"><div id="background-img"></div>
<div class = 'patch-list'></div>

<div class = 'instrumentParameters' id='instrumentParameters'></div>
      <div class="application-area">
    
      </div>
</div>
    </div>
    
    <!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->

    <script src="bootstrap-3.0.0/dist/js/bootstrap.min.js"></script>
  </body>
</html>
