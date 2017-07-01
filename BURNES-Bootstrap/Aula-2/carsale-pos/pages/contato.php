<div class="container">
    <ul class="breadcrumb">
        <li><a href="home">Página Inicial</a></li>
        <li>Contato</li>
    </ul>

    <h1>Entre em contato</h1>
    <p>Entre em contato através de alguma coisa</p>

    <form name="contato" method="post" action="https://formspree.io/cesaraugustokg6@hotmail.com"> 
        <label for="nome">Seu nome:</label>
        <input type="text" name="nome" value="" required placeholder="Digite seu nome" class="form-control"> 

        <label for="email">Seu email:</label>
        <input type="text" name="_replyto" value="" required placeholder="Digite seu email" class="form-control">

        <label for="mensagem">Sua mensagem:</label>
        <textarea name="mensagem" required placeholder="Digite sua mensagem" class="form-control" rows="5"></textarea> 
        <br>

        <button type="submit" class="btn btn-success">Enviar</button>
    </form>
</div>