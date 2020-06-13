<?php
    class Model{
        const DB_URL = "localhost";
        const DB_USERNAME = "root";
        const DB_PASSWORD = "";
        const DB_NAME = "colecao";
        protected $abrirConexao;
    
         public function __construct() {
            date_default_timezone_set('America/Bahia');
            try {
                $this->abrirConexao = new PDO('mysql:host='self::DB_URL';dbname='self::DB_NAME, self::DB_USERNAME, self::DB_PASSWORD);
                $this->abrirConexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $this->getAbrirConexao();
            } catch (PDOException $e) {
                echo "Conexão falhou: " . $e->getMessage();
            }
        }
    
        function fecharConecxao() {
            if ($this->abrirConexao == true) {
                $this->abrirConexao->close();
            }
        }
    
        function getAbrirConexao() {
            return $this->abrirConexao;
        }
        public abstract function inserir($o);
        public abstract function alterar($o);
        public abstract function excluir($o);
        public abstract function obter($o = null);
    }
?>