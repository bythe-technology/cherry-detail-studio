# Revisão visual final — 01/11/2026

## Correções
- Selo da fachada removido por completo, incluindo CSS sem uso.
- Botões de contato separados, ícone de calendário com espaçamento único e cantos padronizados.
- Controle de animações alinhado à esquerda, fora da área do botão flutuante.
- Fotografias das páginas de serviços em 3:2, preservando 4:3 para a gangorra; legendas contidas.
- Ritmo vertical e cabeçalhos internos compactados; títulos de seção em dourado e nomes do catálogo com capitalização consistente.
- Título da higienização gerava largura de 326 px em viewport de 320: escala ajustada, largura final 305 px.
- Preços empilhados nas páginas de serviço em telas de até 380 px; menu com foco explícito e links do rodapé com alvo mínimo de 44 px.

## Verificação
Home, cinco páginas de serviço e privacidade visitadas no navegador a 320, 768 e 1440 px. Sem imagens quebradas. Após correção do título, nenhuma página testada apresenta overflow horizontal. Revisões visuais adicionais em 390 px: fachada, contato, menu e catálogo. Menu fecha por Escape e devolve foco ao summary. Pausa de animações confirmada no DOM. Catálogo e agenda mantidos.

Build estático/TypeScript e três testes passaram. git diff --check limpo. Sem novas dependências ou JavaScript adicional. Screenshot: visual-final-facade.png. Medidas: visual-audit-measures.json.
