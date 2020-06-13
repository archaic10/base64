<?php
    require_once 'Model.php'
    class Galeria extends Model{
        public function __construct() {
            parent::__construct();
        }
        public function inserir($o) {        
            $query ="";
           
            try {
               
                return $this->oConn->exec($query);
            } catch (Exception $ex) {
                return false;
            }
        }
    
        public function alterar($o) {      
            $query = "";
            try {
                $resul = $this->oConn->prepare($query);
                return $resul->execute();
                
            } catch (Exception $ex) {
                return false;
            }
          
        }
    
        public function excluir($o) {
            $query = "";
    
            try {
                $resul = $this->oConn->prepare($query);
                return $resul->execute();
            } catch (Exception $ex) {
                return false;
            }
        }
        public function obter($o = null) {
            $query = "";            
            $res = $this->oConn->query($query);
            return $res->fetchAll();
        }
    }
?>