-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: 30-Jun-2017 às 15:43
-- Versão do servidor: 5.6.35
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `aquiexpress`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id`, `nome`) VALUES
(2, 'Computadores'),
(3, 'Eletrônicos'),
(1, 'Telefones e Acessórios');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `cliente`
--

INSERT INTO `cliente` (`id`, `nome`, `cpf`, `email`, `senha`) VALUES
(1, 'Bill Gueites', '111.111.111-11', 'bill@gheites.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(2, 'Isteve Jóbisson', '222.222.222-22', 'isteve@jobison', '827ccb0eea8a706c4c34a16891f84e7b');

-- --------------------------------------------------------

--
-- Estrutura da tabela `itens`
--

CREATE TABLE `itens` (
  `produto_id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `valor` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedido`
--

CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `data` date NOT NULL,
  `status` varchar(20) NOT NULL,
  `cliente_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `produto`
--

CREATE TABLE `produto` (
  `id` int(11) NOT NULL,
  `nome` varchar(250) NOT NULL,
  `valor` double NOT NULL,
  `descricao` text NOT NULL,
  `imagem` varchar(20) DEFAULT NULL,
  `destaque` enum('S','N') NOT NULL,
  `categoria_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produto`
--

INSERT INTO `produto` (`id`, `nome`, `valor`, `descricao`, `imagem`, `destaque`, `categoria_id`) VALUES
(1, 'Smartphone Samsung Galaxy J7 Prime Dual Chip Android Tela 5.5 32GB 4G Câmera 13MP - Dourado', 1199, 'Elegantemente sofisticado\r\nConta com um deslumbrante acabamento em metal escovado e câmera sem nenhum ressalto, garantindo um design ultrafino. Sua tela ampliada apresenta bordas suaves e arredondadas que proporcionam a melhor visualização e manuseio confortável com uma só mão.\r\nMais brilho em suas fotos\r\nCom uma lente F1.9 que possibilita imagens claras mesmo em condições de baixa luminosidade, a câmera de 13 MP garante que tudo o que você registrar ficará belo, nítido e com detalhes vívidos.\r\nControle e capture como quiser\r\nSua função de selfie ampla, juntamente com sua câmera frontal de 8 MP, permite que você inclua mais pessoas em suas fotos em grupo e capture belas paisagens como devem ser vistas. Você pode até mesmo usar a palma da sua mão para tirar fotos com facilidade.\r\nDesempenho mais rápido\r\nA avançada compatibilidade com as memórias RAM e ROM permite transições mais suaves na interface do usuário e maior capacidade para multitarefas. O Smart Manager pensa por você, verificando e otimizando o estado do aparelho e mantendo você sempre à frente.', '129543938_1GG.jpg', 'S', 1),
(2, 'Galaxy Tab S2 8.0 4G', 2690, 'Extremamente Fino e Leve\r\nO Galaxy Tab S2 foi projetado para unir um tablet de alta performance à um design muito fino e leve. Tudo para que você leve seus conteúdos preferidos sempre com você.\r\nProdutividade\r\nO Galaxy Tab S2 vem preparado para suportar os principais aplicativos de produtividade, como o Word, Excel, PowerPoint e OneNote. Agora ficou ainda mais fácil editar documentos e compartilhá-los com quem precisar.', '129543938_2GG.jpg', 'N', 1),
(3, 'Gear Fit 2 - Large', 1190, 'Pulseira Esportiva com GPS\r\nFinalmente, uma pulseira de atividades físicas que acompanha você em suas corridas enquanto seu telefone fica em casa. O GPS integrado rastreia sua rota, distância e velocidade em tempo real com precisão e dedicação para ajudar você a ir cada vez mais longe.\r\n\r\n', '129543938_3GG.jpg', 'N', 1),
(4, 'Fone de Ouvido Level On Wireless', 979, 'Design Elegante e Som de Qualidade\r\nPor fora, Samsung Level On Wireless tem design elegante, compacto e confortável. Por dentro, seus alto-falantes entregam uma qualidade de som única com som rico e balanceado.\r\n', '129543938_4GG.jpeg', 'N', 3),
(5, 'Caixa de Som Bluetooth Level Box Pro', 690, 'Áudio em UHQ (Ultra High Quality – Altíssima Qualidade)\r\nO Áudio em UHQ (96 ~ 192 kHz / 24 bits) é ainda melhor do que o áudio com qualidade de CD (44.1 kHz / 16 bits). A tecnologia do codec UHQ-BT ajuda a minimizar a perda de som. Desfrute de um som magnífico e equilibrado – quase tão bom quanto estar no estúdio com seus músicos favoritos!', '129543938_5GG.jpeg', 'S', 3),
(6, 'Caixa de Som Bluetooth Level Box Mini', 579, 'Som premium, otimizado para smartphones\r\nA Samsung criou a Level Box mini especialmente para aprimorar sua experiência de música no seu smartphone. Com som claro e graves fortes, potencializados por um radiador passivo, é perfeita para ouvir música e assistir filmes. O codec APT-X garante um som estéreo e de qualidade.', '129543938_6GG.jpeg', 'N', 3),
(7, 'Level Box Slim', 599, 'Um som riquíssimo à sua disposição\r\nSom de primeira classe onde e sempre que você precisar. Seu design altamente portátil, que cabe até no bolso, e alto-falante incrível de 8 W garantem que você nunca fique sem som nítido onde quer que a vida leve você.\r\n', '129543938_7GG.jpeg', 'N', 3),
(8, 'Fone de Ouvido Estéreo Level In ANC', 279, 'Em harmonia com a música\r\nEntregue-se a um som límpido e intenso. Os novos fones de ouvido Level In ANC minimizam consideravelmente o ruído ambiente ao seu redor em cerca de -20 dB, para que permaneça conectado com as músicas que você adora.\r\n\r\nEm sintonia com o mundo ao seu redor\r\nO modo de conversa Talk-in permite que você fique totalmente imerso em música de alta qualidade e ao mesmo tempo fique com o ouvido atento ao seu redor, assim, é possível fazer o que gosta sem nenhum risco.', '129543938_8GG.jpeg', 'N', 3),
(9, 'Galaxy S8', 4890, 'Apresentando o incrível Display infinito\r\n\r\nO design revolucionário do Galaxy S8 e S8+ começa de dentro para fora. Remodelamos cada peça do layout do telefone para ultrapassar os limites da tela do aparelho. Assim, tudo o que você vê é puro conteúdo, e praticamente nenhuma moldura. É a maior e mais envolvente tela em um smartphone Galaxy desse tamanho. E é fácil de segurar com apenas uma mão.', '129543938_9GG.jpeg', 'S', 1),
(10, 'Galaxy A3 (2016)', 1390, 'Bela combinação de metal e vidro\r\nUma fusão de metal sólido com qualidade premium e Gorilla Glass atraente. Desfrute de uma aderência mais estável e confortável com um design fino e uma moldura mais estreita.', '129543938_10GG.jpeg', 'N', 1),
(11, 'Galaxy J5 Prime', 999, 'Elegantemente sofisticado\r\nConta com um deslumbrante acabamento em metal escovado e câmera sem nenhum ressalto, garantindo um design ultrafino. Sua tela ampliada apresenta bordas suaves e arredondadas que proporcionam a melhor visualização e manuseio confortável com uma só mão.', '129543938_11GG.jpeg', 'N', 1),
(12, 'Galaxy J5 (Duos)', 1049, 'Experimente a Série J\r\nA série Galaxy J é voltada principalmente para quem gosta de estar entre amigos. Por isso vem com uma câmera que permite registros de selfies de alta qualidade com sua câmera frontal de 5MP e flash frontal e também conta com uma super tela de superAMOLED para visualização das suas fotos e vídeos com todos os detalhes.\r\n', '129543938_13GG.jpeg', 'N', 1),
(13, 'Notebook Expert X51', 3990, 'Quando a configuração máxima é o mínimo que você exige\r\nUma linha de notebooks desenvolvida especificamente para quem procura desempenho superior, características de segurança avançadas e a mais alta tecnologia.', '129543938_14GG.jpeg', 'S', 2),
(14, 'Samsung Essentials E21', 4490, 'Windows 10 Home\r\nProcessador Intel® Celeron®\r\nCódigo do produto: NP300E5K-KFBBR', '129543938_15GG.jpeg', 'N', 2),
(15, 'Samsung Chromebook 3', 4890, 'Processador Intel® Celeron®\r\nSistema operacional: Google Chrome OS\r\nCódigo do produto: XE500C13-AD1BR', '129543938_16GG.jpeg', 'N', 2),
(16, 'Samsung Essentials All in One E2', 5990, 'Windows 10 Home\r\nProcessador Intel® Pentium®\r\nCódigo do produto: DP500A2L-KW2BR', '129543938_17GG.jpeg', 'S', 2),
(17, 'Samsung Essentials All in One E1', 6990, 'Windows 10 Home\r\nProcessador Intel® Celeron®\r\nCódigo do produto: DP500A2L-KW1BR\r\n', '129543938_18GG.jpeg', 'N', 2),
(18, 'Essential White Curved Monitor with the deeply immersive viewing experience', 9990, 'A maior curva de tela para a melhor experiência de visualização\r\nTela de 1800 R para maior conforto para sua visão\r\nPainel VA avançado da Samsung para mínima perda de luz e cores escuras mais fortes e uniformes', '129543938_19GG.jpeg', 'S', 2),
(19, '28 Monitor LED Ultra HD 4K', 8900, 'Descubra os detalhes e o realismo em imagens de qualidade UHD\r\n1 bilhão de cores\r\nTempo de resposta de 1 ms - nitidez até em cenas de ação', '129543938_20GG.jpeg', 'S', 2),
(20, 'Ar-Condicionado Split Digital Inverter Frio (220 V)', 5900, 'Digital Inverter: até 60% de economia\r\nVirus Doctor: elimina 99,9% de vírus e bactérias\r\nTripla proteção: compressor, variação de tensão da rede e anti-corrosão\r\n\r\nO design diferenciado do Digital Inverter da Samsung combina perfeitamente com a decoração moderna e com o estilo da sua sala de estar. Além de ser bonito, esse aparelho excepcional oferece ar limpo e fresco, com baixo consumo de energia.', '129543938_21GG.jpeg', 'S', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome_UNIQUE` (`nome`);

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cpf_UNIQUE` (`cpf`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Indexes for table `itens`
--
ALTER TABLE `itens`
  ADD PRIMARY KEY (`produto_id`,`pedido_id`),
  ADD KEY `fk_produto_has_pedido_pedido1_idx` (`pedido_id`),
  ADD KEY `fk_produto_has_pedido_produto1_idx` (`produto_id`);

--
-- Indexes for table `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pedido_cliente1_idx` (`cliente_id`);

--
-- Indexes for table `produto`
--
ALTER TABLE `produto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_produto_categoria_idx` (`categoria_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produto`
--
ALTER TABLE `produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `itens`
--
ALTER TABLE `itens`
  ADD CONSTRAINT `fk_produto_has_pedido_pedido1` FOREIGN KEY (`pedido_id`) REFERENCES `pedido` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_produto_has_pedido_produto1` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `fk_pedido_cliente1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `produto`
--
ALTER TABLE `produto`
  ADD CONSTRAINT `fk_produto_categoria` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
