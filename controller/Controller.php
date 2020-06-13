<?php 
    class Controller{
        public $requisicao = $_POST;
        public _construct(){    
            if(array_key_exists('comando',$this->requisicao) && $this->requisicao['comando'] != ""){
                if(method_exists($this,$callback)){
                    $this->$callback();
                }
            }
        }
    }
?>