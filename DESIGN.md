# Cherry Detail Studio — direção visual

Site editorial para estética automotiva premium em Jacupiranga. O cuidado em cada detalhe orienta a composição. Referência consultada: BMW M na coleção awesome-design-md, adaptada à marca Cherry sem copiar sua identidade.

- Paleta: preto `#0b0b0b`, grafite `#1b1b1b`, branco `#f4f1eb`, dourado `#c8a360`. Cor principal em campos inteiros; dourado apenas em ações e detalhes.
- Tipografia: Manrope para títulos e leitura, com pesos 400–700 e hospedagem local pelo next/font. A fonte da logo oficial pertence somente ao próprio arquivo da marca.
- Layout: largura máxima de 1360 px; margens de 24 px no celular e 56 px no desktop; seções amplas com composições variadas.
- Componentes: botões retos, navegação textual, listas de serviços, fotografia em recorte amplo, links com foco visível.
- Responsividade: 390, 768 e 1440 px; conteúdo em uma coluna até 860 px. Botões com alvos de toque confortáveis.
- Estados: hover em contraste, foco dourado espesso; contador possui texto estático de reserva. Respeitar `prefers-reduced-motion`.
- Imagens geradas são identificadas como ilustrativas. Mostrar automóveis comuns no Brasil (Polo, Onix, Virtus, Tracker e Tera) sem apresentá-los como clientes ou serviços realizados. Não usar resultados, avaliações ou instalações fictícias.

## Revisão visual — 28/10/2026
- Símbolo compacto C com arco automotivo, gerado a partir da logo original; aplicado ao header, footer, favicon de 64 px e Apple icon de 180 px.
- Rodapé em três colunas úteis: identidade, localização e contato; base compacta com privacidade e retorno ao início.
- Serviços em composições editoriais com imagem dominante, sem miniaturas; empilhamento integral no celular.
- Localização com Google Maps e link de rota; iframe com título acessível e lazy loading.
- Frase sobre veículos comuns no Brasil removida a pedido. Imagens continuam com descrição acessível e identificação de ilustração nas páginas de serviços.

## Correção de identidade aprovada pelo usuário
- Logo oficial completa com fundo removido no header e footer. Proibido substituir por monograma, reescrever o nome ou reinterpretar a marca nesses locais.
- Símbolo C permitido somente nos ícones do navegador/dispositivo.
- Header flutuante fixo com margens, cantos arredondados e menu móvel com suporte a teclado e Escape. Esta é uma preferência explícita do usuário e prevalece sobre a regra de header plano da skill.
- Footer com chamada de contato, logo oficial, endereço e horários; tipografia Manrope e informações compactas.

## Imagens recortadas e movimento
- Loja com alpha transparente, sem céu, rua ou entorno, iluminação dourada e flutuação de 12 px.
- Kit ilustrativo de produtos e ferramentas sem marcas, recortado em WebP.
- Movimento premium: curva .2,.7,.2,1; entradas de 650 ms, números de 450 ms, flutuação lenta.
- Controle global de pausa e preferência reduced-motion; conteúdo continua legível sem JavaScript.
- Contador tem urgência baseada na data real, sem vagas ou promoções fictícias.

## Alterações solicitadas pelo cliente — vigentes
- Agendamento exclusivamente pelo WhatsApp; botões verdes com ícone oficial, ação no header e botão flutuante persistente.
- Instagram com ícone e link do perfil pessoal de Sandro Ramos: https://www.instagram.com/sandro_ramoos_/.
- Inauguração mantida como mensagem institucional, sem data, horário de evento, convite público ou contador.
- Fachada removida da interface; espaço ocupado pelo passo a passo real de leva e traz em Jacupiranga.
- Textos de higienização e lavagem premium detalhados; sem promessas absolutas de eliminação de microrganismos ou recuperação do estado de novo.
- Favicon atualizado para composição completa fiel à logo oficial.

## Espaço oficial — atualização após inauguração
- Estabelecimento inaugurado: mensagem de portas abertas, sem divulgação de evento futuro.
- Cenas baseadas nas fotos oficiais: paredes brancas, telhado metálico preto, LEDs geométricos, piso modular preto com faixas cinza e rampa gangorra amarela. Não inventar outro estúdio.
- Hero e cinco serviços com carros comuns no Brasil; rampa apenas na lavagem premium. Ferramentas e retrato de Sandro também no ambiente oficial.
- Cenas recriadas continuam ilustrativas; não representam comprovação de serviços executados. Preservar identidade do fundador e logo oficial.
- WebP otimizado, imagens responsivas, carregamento prioritário somente acima da dobra.

## Fachada e recepção — revisão solicitada
- Retrato de Sandro restaurado à versão anterior em alessandro-portrait.webp, sem nova edição.
- Seção de boas-vindas com fotografia tratada da fachada oficial: preservar arquitetura, letreiro e portões; remover interface, pessoas e balões.
- Selo editorial Novo espaço / Jacupiranga · SP, sem aparência de certificação. Diferenciais reais: hora marcada, cuidado individual e leva e traz local.
- Componente StudioIntroduction isolado com CSS Module; imagem responsiva lazy-loaded e layout empilhado até 860 px.

## Agenda online e catálogo — 01/11/2026
- Nova agenda oficial: https://minhaautoagenda.com/p/cherrydetailstudio. Agendamento online como ação principal em dourado com ícone de calendário; WhatsApp verde para dúvidas e pedidos específicos.
- 18 serviços com descrições, duração e valores por porte/fixos extraídos das janelas públicas da agenda; preços consultados em 01/11/2026, não sincronizados automaticamente. Confirmar classificação, condições e valor final na agenda/avaliação.
- Catálogo em grupos com details/summary nativos, funcional sem JavaScript; preços também nas páginas dos serviços em destaque.
- Preservar todos os visuais aprovados, retrato anterior e fachada. Sem novas bibliotecas. Dados em lib/catalog.ts, componentes server e CSS Module.

## Revisão visual vigente — sem selo na fachada
- Remover completamente o selo Novo espaço/Jacupiranga da fotografia e seus estilos.
- Botões com raio de 8 px e espaçamento entre ações; ícone de agenda com gap único.
- Controle de movimento alinhado à esquerda, longe da ação flutuante. Fotos de serviço em 3:2 (premium 4:3), com legendas legíveis.
- Respiro de seções padronizado: 110 px desktop / 75 px móvel; páginas de serviço com cabeçalho e transição para fotografia mais compactos.
- Foco explícito no menu e no catálogo; preços e header ajustados para telas estreitas de 320 px.

## Conteúdo essencial e agenda como prioridade
- Textos institucionais reduzidos a uma frase e listas curtas. Ícones lineares discretos com texto; decorativos para leitores de tela.
- Agenda online como CTA principal em todas as seções e no botão flutuante. WhatsApp secundário, para ajuda, leva e traz e orçamento específico.
- Catálogo com listas de inclusões e condições essenciais; dados completos preservados na camada de conteúdo e agenda. Valores e durações mantidos.
- Sem selo sobre a fachada; identidade e retrato preservados.
