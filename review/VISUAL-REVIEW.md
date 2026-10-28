# Revisão visual — Cherry Detail Studio

## Diagnóstico e correções

| Área | Problema observado | Correção |
| --- | --- | --- |
| Rodapé | Palavra CHERRY desproporcional; três links isolados; muito espaço vazio; falta de dados úteis | Marca compacta, três colunas de identidade/localização/contato e base funcional |
| Identidade | Nome recomposto em texto; favicon era a logo inteira ilegível em tamanho pequeno | Símbolo C com arco derivado da marca, aplicado ao header e footer; ícones de 64 e 180 px |
| Serviços | Miniaturas pequenas não comunicavam o cuidado representado nas cenas | Imagens dominantes ao lado do conteúdo; fotos na largura disponível no celular |
| Localização | Endereço apenas em texto e link externo | Seção com mapa incorporado, endereço e ação de rota |
| Conteúdo | Frase editorial sobre veículos brasileiros ocupava espaço sem ajudar o cliente | Frase removida conforme solicitação |
| Privacidade | Texto não mencionava conexão com fornecedor do mapa | Inclusão de informação sobre o Google Maps |

## Direção preservada

Preto e dourado da Cherry, títulos serifados, fotografias de modelos comuns no Brasil e layout editorial. A identidade do estúdio orienta o fechamento: um símbolo compacto acompanha as informações que ajudam a visitar ou entrar em contato. Não foi criada uma nova direção completa nem executado sorteio de layout, pois a revisão preserva a composição aprovada e corrige seções específicas.

## Conferência

- Produção compilada com Next.js e TypeScript.
- Revisão visual no navegador autorizado em 390, 768 e 1440 px; sem transbordamento horizontal nas medições dessas larguras.
- Rodapé observado em três composições: uma coluna no celular, identidade seguida de duas colunas no tablet e três colunas no desktop.
- Google Maps carregado no celular, com controles e link externo de rota. O ponto é resolvido pelo Google a partir do endereço informado; não foi confirmado por coordenadas fornecidas pela empresa.
- Hierarquia semântica, foco visível, link de pular conteúdo, textos alternativos, imagens dimensionadas e movimento reduzido preservados.
- Não foi executado o inspector automatizado da skill, pois a inspeção de navegador foi realizada pela interface CUA autorizada. Não há alegação de zero falhas nesse inspector.

## Limites

Fotografias dos serviços são ilustrativas. Símbolo gerado a partir da logo fornecida, sem substituir a marca original em materiais comerciais. A revisão não representa medição de Core Web Vitals em tráfego real ou auditoria formal de acessibilidade.

## Correção final de marca e testes de UI/UX
- A aplicação anterior do monograma no header/footer foi substituída pela logo oficial com transparência. O C fica apenas nos favicons.
- Manrope confirmada pelo estilo computado do navegador.
- Header fixo e flutuante observado em celular, tablet e desktop.
- Menu móvel: Enter abriu; clique em Serviços navegou e fechou; Escape fechou e devolveu foco ao summary.
- Âncora de serviço permaneceu abaixo do header (topo da seção 91 px; final do header 88 px na medição móvel).
- Larguras verificadas: 390, 768 e 1440 px, sem transbordamento horizontal.
- Header e footer usam /cherry-logo-official.webp. URLs de WhatsApp do rodapé mantêm o número 5513996174744.
- Build final e dois testes existentes da inauguração passaram.
- Evidências: footer-official-desktop.png e footer-official-mobile.png.
