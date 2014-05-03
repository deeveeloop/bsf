var $o$ = {

/*
POST Request to run *method* from specified *controller*
    
    Required params:
                    controller name
                    method name
    Optional params:
                        id of model (can be array if more than one)
                        model - in json format
                        template - name of template file from app/template directory
                        target - id of element you want to inject template view
                        rawTemplate - as string.  
                        data - you can put here whatever you want to pass to controller                       
                        
Example:                      
                           
        in main.js                   
                           
            $("#get").on("click",function(){

                $o$.run({

                        controller: "UserController",
                        method: "getUser",
                        template: 'user.html',
                        target:"#content"
                });
            });
              
                    
        in restcontrollers/UserController.php:

            public function saveUser()
            {
                $users = $this->db->query('SELECT * FROM users');
                $users= $users->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($users);
            }     

        in resttemplates/user.html

            {{#model}}
                <li id='{{id}}' class='user'>{{name}} --- {{surname}}</li>  
            {{/model}}

        in index.html

            <html>
            <head>
            </head>
            <body>
            <div id="container">
                    <a id="get" href="#">GET users</a>
                <div id="content">
                </div>
            </div>  
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/jquery-migrate.min.js"></script>
        <script type="text/javascript" src="js/mustache.js"></script>
        <script type="text/javascript" src="js/sos.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        </body>
        </html>
*/

    run: function(object)
    {

        if (object.render){
            var model = "asas";

            $.get('../templates/'+object.render, function(template) {
                    
                        $(object.target).fadeOut('slow',function(){
                            $(this).empty();
                            var html = Mustache.to_html(template, model);
                            $(object.target).html(html).fadeIn();


                        });

                        
            });                

        }else
        {
        $.ajax({
            type: 'POST',
            url: '../ResourceController.php',
            dataType: "json",
            data: {
                controller: object.controller,
                method: object.method,
                id: object.id,
                model: object.model,
                data: object.data

            },
            
            success: function(result) {

                if (object.template){
                    
                    var model = {model:result};    

                    $.get('../templates/'+object.template, function(template) {
                    
                        $(object.target).fadeOut('slow',function(){
                           $(this).empty();

                           var html = Mustache.to_html(template, model);
                           $(object.target).html(html).fadeIn();
                        });
                    });
                }

                if (object.rawTemplate){

                    var model = {model:result};

                    if(object.paginate===true){

                        $(object.target+", "+object.paginateButtonsId).fadeOut('fast',function(){
                        $(this).empty();
                        
                        var html = Mustache.to_html(object.rawTemplate, model);
                        
                        $(object.target).html(html);

                            $(object.paginateParentId).pajinate({
                                items_per_page : object.paginatePerPage,
                                item_container_id : object.paginateId,
                                nav_panel_id : object.paginateButtonsId
                            });

                            $(object.target+", "+object.paginateButtonsId).fadeIn('fast');        
                        });                                 


                }
                else
                {
                    $(object.target).fadeOut('fast',function(){
                    $(this).empty();
                    var html = Mustache.to_html(object.rawTemplate, model);
                    $(object.target).html(html);

                    $(object.target).fadeIn('fast');        
                    
                    }); 






                    }
                    
                    
                }

            }
        });

        };
    },

    grab: function(id)
    {
        var label = []
           ,value = [] 
           ,json={};

        $(id).find('label').each(function(index){
            label.push($(this).text());
        });

        $(id).find('input,textarea').each(function(index){
            value.push($(this).val());
        });

        var i;
        var len=label.length;

        for (i=0;i<len;i++){

            json[label[i]]=value[i];
        }

        return json;    
        
    },

    live: function(source,target)
    {
        
        $(source).on('keyup', function(e){
          
                $(target).text(this.value);
          
        })       
           

    },
    append: function(object)
    {

        if (object.render){
            var model = "asas";

            $.get('../templates/'+object.render, function(template) {
                    
                        // $(object.target).fadeOut('slow',function(){
                           
                            var html = Mustache.to_html(template, model);
                            $(object.target).append(html).fadeIn();

                        // });

                         
            });                

        }else
        {
        $.ajax({
            type: 'POST',
            url: '../ResourceController.php',
            dataType: "json",
            data: {
                controller:object.controller,
                method: object.method,
                id: object.id,
                model: object.model,
                data: object.data

            },
            
            success: function(result) {

                if (object.template){
                    
                    var model = {model:result};    

                    $.get('../templates/'+object.template, function(template) {
                    
                        // $(object.target).fadeOut('slow',function(){
                        

                           var html = Mustache.to_html(template, model);
                           $(object.target).append(html).fadeIn();
                        // });
                    });
                }

                if (object.rawTemplate){

                    var model = {model:result};

                    if(object.paginate===true){

                        $(object.target+", "+object.paginateButtonsId).fadeOut('fast',function(){
                        $(this).empty();
                        
                        var html = Mustache.to_html(object.rawTemplate, model);
                        
                        $(object.target).html(html);

                            $(object.paginateParentId).pajinate({
                                items_per_page : object.paginatePerPage,
                                item_container_id : object.paginateId,
                                nav_panel_id : object.paginateButtonsId
                            });

                            $(object.target+", "+object.paginateButtonsId).fadeIn('fast');        
                        });                                 


                }
                else
                {
                    $(object.target).fadeOut('fast',function(){
                    // $(this).empty();
                    var html = Mustache.to_html(object.rawTemplate, model);
                    $(object.target).html(html);

                    $(object.target).fadeIn('fast');        
                    
                    }); 






                    }
                    
                    
                }

            }
        });

        };
    }
} 