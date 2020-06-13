<?php require_once  "./layout/topo.php" ;?>
        <form action="">
                <label for="arquivo">Imagem</label><br>
                <button type="button" id="upload"><span>upload</span></button>
                <input type="file" name="arquivo" id="arquivo">
                <!-- Div onde serão carregados os inputs com o base64-->
                <div id="convert">
                </div>
        </form>
                <br>
            </div>
        </div>
        <br>
        <div id="painel">          
            <div class="card">
                <h2>painel </h2>
            </div>            
        </div>
<?php require_once "./layout/footer.php"?>