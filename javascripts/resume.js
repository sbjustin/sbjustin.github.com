$.ajax({
     url:"https://api.github.com/repos/rubyloco/rubyloco.com/contributors",
     dataType: 'jsonp',
     success:function(json){
      for (var i = 0; i < json.data.length; i++) {
        link = document.createElement("a");
        if(json.data[i].login == 'sbjustin'){
          link.textContent = json.data[i].login + '(Me)'; 
        }
        else{
          link.textContent = json.data[i].login;
        }
        
        link.title = json.data[i].login;
        link.href = json.data[i].html_url;
        link.target = '_blank';
        if((i + 1) == json.data.length){
          $('#rubyloco_contributors').append(link);
        }
        else{
          $('#rubyloco_contributors').append(link).append(", ");
        };

       };
     },
     error:function(){
         $('#rubyloco_contributors').append("Error communicating with github...");
     },
});


$.ajax({
  url:"https://api.github.com/repos/sbjustin/monopoly",
  dataType: 'jsonp',
  success:function(json){
    $('#monopoly_last_update').append(new Date(json.data.pushed_at).toString('MM/dd/yyyy'));
  },
  error:function(){
     $('#monopoly_last_update').append("Error communicating with github...");
  },
});

$.ajax({
  url:"https://api.github.com/repos/sbjustin/rubyloco.com",
  dataType: 'jsonp',
  success:function(json){
    $('#rubyloco_last_update').append(new Date(json.data.pushed_at).toString('MM/dd/yyyy'));
  },
  error:function(){
     $('#rubyloco_last_update').append("Error communicating with github...");
  },
});

$.ajax({
  url:"https://api.github.com/repos/sbjustin/sbjustin.github.com",
  dataType: 'jsonp',
  success:function(json){
    $('#justinnashnet_last_update').append(new Date(json.data.pushed_at).toString('MM/dd/yyyy'));
  },
  error:function(){
     $('#justinnashnet_last_update').append("Error communicating with github...");
  },
});

