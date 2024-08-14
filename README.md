#### Projeto Final-M4
# ♻💻 API Verde - Gerenciamento de coleta de resíduo eletrônicos para empresas

## 📝 Sobre
A API Verde foi desenvolvida como projeto final do Módulo 4 do programa Programadores do Amanhã, sendo realizada pela Squad 1, composta por Crystian da Paz, Elzo Ithalo, Jamyle Elen, Joicy Kelly, Lauanny Ramalho, Reury Cardoso e Saulo de Tarso. A escolha do tema, focado no gerenciamento de resíduos eletrônicos para empresas, foi feita por consenso entre todos os integrantes do grupo.

Além do uso do banco de dados SQLite, o desenvolvimento da API contou com a integração de diversas ferramentas e pacotes, como UUID, Serialize, e Type Module, entre outros. O projeto foi desenvolvida com foco na sustentabilidade e no descarte adequado de componentes eletrônicos. Além disso, o projeto foi implementado com sucesso, incluindo a realização do deploy.

# 🚯 Problematização
O descarte inadequado de componentes eletrônicos é um dos maiores desafios ambientais da era digital. Com o rápido avanço da tecnologia, o ciclo de vida dos dispositivos eletrônicos se encurtou significativamente, resultando em um aumento exponencial do volume de lixo eletrônico. Esse tipo de resíduo, que contém metais pesados como chumbo, mercúrio e cádmio, quando descartado de forma incorreta, pode causar graves danos ao meio ambiente e à saúde pública.

A falta de infraestrutura e políticas públicas voltadas para a coleta seletiva e reciclagem de eletrônicos agrava ainda mais esse cenário. Muitas vezes, não há locais apropriados para o descarte de resíduos eletrônicos, e a população não está devidamente informada sobre a importância de descartar esses materiais de forma correta. Isso resulta em uma baixa taxa de reciclagem e no desperdício de materiais valiosos que poderiam ser reaproveitados, como ouro, cobre e outros metais raros.

Assim, o descarte inadequado de componentes eletrônicos não é apenas uma questão ambiental, mas também um problema econômico e social que demanda soluções urgentes e integradas. A conscientização, aliada à criação de mecanismos eficazes de gestão de resíduos eletrônicos, é essencial para mitigar os impactos negativos e promover um futuro mais sustentável.

# 💡 Solução Tecnológica: API Verde
A API Verde foi desenvolvida com o objetivo de enfrentar o problema do descarte inadequado de resíduos eletrônicos, oferecendo uma solução tecnológica eficiente e sustentável para empresas. Através dessa API, empresas podem gerenciar o descarte de seus resíduos eletrônicos de forma responsável e conforme os padrões ambientais.

A API Verde oferece, portanto, uma solução prática e escalável para o problema crescente do descarte inadequado de componentes eletrônicos, permitindo que empresas adotem práticas mais sustentáveis e contribuam para um futuro mais verde. Alguns pontos que a API ajuda a resolver os problemas do descarte inadequado de resíduos eletrônicos por meio das seguintes soluções tecnológicas:

- **Facilita o Registro e Organização de Empresas:** A API permite que empresas se registrem e mantenham seus dados organizados, como localização, tipos de resíduos gerados e capacidade de armazenamento. Isso ajuda a mapear e organizar a geração de resíduos eletrônicos, facilitando o controle e a responsabilidade ambiental.
  
- **Automatiza o Processo de Solicitação de Coleta:** As empresas podem solicitar coletas de resíduos eletrônicos de forma ágil e eficiente. Isso resolve o problema da falta de coordenação no descarte adequado, conectando empresas a soluções de coleta de resíduos certificadas.
  
- **Oferece Segurança e Transparência no Gerenciamento de Resíduos:** Com um sistema de autenticação seguro, as empresas podem acessar suas contas com confiança.
  
- **Promove a Economia Circular e a Reutilização de Materiais:** A API facilita a listagem e filtragem de resíduos eletrônicos, permitindo que empresas identifiquem materiais que possam ser reciclados ou reutilizados por outras empresas. Isso ajuda a reduzir o impacto ambiental dos resíduos e promove práticas mais sustentáveis.
  
- **Otimiza o Fluxo de Descarte:** A centralização das informações e a automação dos processos garantem que o descarte de resíduos eletrônicos seja realizado de forma organizada, com menos esforço manual, contribuindo para a eficiência operacional das empresas.

# 📜 Algumas informações importantes para melhor entendimento

- O que é API?
  
    API é Interface de Programação de Aplicações. Utilizando a analogia do garçom, API leva pedidos de um aplicativo a um serviço e traz as respostas de volta. Ela facilita a comunicação entre diferentes sistemas, permitindo que eles troquem informações sem precisar saber exatamente como funcionam por dentro.

- O que é API's REST?
  
    APIs REST (Representational State Transfer) são um tipo específico de API que segue um conjunto de princípios e regras para a troca de informações entre sistemas.

- Métodos HTTP
    - GET: Recuperar dados de um servidor.
    - POST:  Enviar dados para o servidor para criar um novo recurso.
    - PATCH: Atualizar parcialmente(modificação de apenas dado) um recurso existente
    - PUT: Atualizar completamente(modifica mais de um dado) um recurso existente no servidor.
    - DELETE: Remover um recurso do servidor.

- Status de resposta HTTP
    - 1xx - Informativo
    - 2xx - Sucesso
    - 3xx - Redirecionamento
    - 4xx - Erro do Cliente
    - 5xx - Erro do Servidor

- Padrão MVC
    - Model (Modelo): Representa a lógica de negócios e os dados da aplicação.
    - View (Visão): Representa a interface do usuário e a forma como os dados são apresentados.
    - Controller (Controlador): Atua como intermediário entre o Modelo e a Visão, ele decide como a aplicação deve responder a certas ações.

-  O que é módulos ES6?
    - É uma separação de código por módulos no contexto do ES6 (ECMAScript 2015) refere-se ao uso do sistema de módulos introduzido nessa versão do JavaScript para organizar e estruturar o código de forma mais eficiente, ou seja, seu código é um grande quebra-cabeça. Em vez de tentar montar tudo de uma vez, você divide o quebra-cabeça em peças menores. Cada peça (ou módulo) é responsável por uma parte específica do código.
    - Na aplicação, foi utilizado o padrão MVC(Model - View - Controller)
    -  No contexto de módulos ES6, cada componente do MVC pode ser implementado como um módulo separado, facilitando a organização e a manutenção do código
    -  Com a divisão do código em arquivos separados é necessário os importe ou exporte.
    -  Exportar é como dizer: "Eu estou oferecendo esta peça do quebra-cabeça para quem precisar dela."
    -  Importar é como dizer: "Eu preciso desta peça do quebra-cabeça para completar minha montagem."

 
- SQLite
  
  É um sistema de gerenciamento de banco de dados relacional leve e autônomo. Ele é projetado para ser simples e eficiente, com um arquivo de banco de dados que é armazenado em um único arquivo no sistema de arquivos.

- Object-Relational Mapping ou Mapeamento Objeto-Relacional
  
    é uma técnica de programação que permite interagir com bancos de dados relacionais usando uma abordagem orientada a objetos. Em vez de escrever consultas SQL diretamente, você utiliza classes e objetos para representar e manipular os dados.


- Middleware
  
   - É um software que atua como intermediário entre diferentes sistemas ou camadas de uma aplicação. Ele serve como uma ponte que facilita a comunicação, integração e gerenciamento de dados entre componentes, aplicativos ou serviços.

  - Imagine que há alguém na festa que se oferece para ajudar a comunicar informações entre os grupos. Se     alguém do grupo de filmes quer saber o que está acontecendo no grupo de culinária, essa pessoa vai até     o grupo de culinária, coleta as informações e volta para contar ao grupo de filmes. E, se alguém do       grupo de culinária precisa de uma resposta do grupo de filmes, a pessoa faz o mesmo caminho para levar  a mensagem de volta. Esse "ajudante" é como o middleware. Ele não participa da conversa principal, mas      ajuda a manter todos os grupos informados e coordenados, garantindo que as mensagens cheguem onde         precisam ir. Assim, todos na festa conseguem se comunicar e interagir de forma mais eficiente, mesmo que  estejam em grupos diferentes.

  **Exemplos de Middleware:**
  - Middleware de autenticação: Verifica as credenciais do usuário antes de permitir o acesso a uma aplicação.
  - Middleware de logging: Registra as atividades e eventos que ocorrem dentro de um sistema.
  - Middleware de comunicação: Facilita a troca de mensagens entre diferentes serviços ou componentes, como em sistemas distribuídos.

- Dependências utilizadas
  Dependências são bibliotecas ou pacotes externos que um projeto precisa para funcionar corretamente. Elas fornecem funcionalidades adicionais que não são incluídas no código principal do projeto, economizando tempo e esforço ao evitar a necessidade de reinventar a roda. Foram usadas as seguindes dependências:
  ~~~javascript
  // Esse trecho fica localizado no package.json
     "dependencies": {
        "bcrypt": "^5.1.1",
        "cors": "^2.8.5",
        "dotenv": "^16.4.5",
        "express": "^4.19.2",
        "jest": "^29.7.0",
        "jsonwebtoken": "^9.0.2",
        "mysql2": "^3.11.0",
        "nodemon": "^3.1.4",
        "sequelize": "^6.37.3",
        "sqlite3": "^5.1.7",
        "uuid": "^10.0.0"
  }
  ~~~
  Onde:
    - bcrypt (^5.1.1): Biblioteca para criptografar senhas de forma segura. Utiliza hashing (um processo que transforma a senha em uma string única e irreversível) para proteger senhas armazenadas.
  
