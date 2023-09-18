# Desafio de Engenharia de software PL
## Este desafio consiste no desenvolvimento de uma plataforma onde teremos um ranking baseado nas pontuações de entregas. Os alunos possuem Tarefas, Desafios e Projetos que são avaliados entre 0 e 100, e para cada uma destas atividades a ideia é ele receber uma pontuação com pesos diferentes de acordo com a sua pontuação. Os alunos são divididos em escolas de Dados, Tecnologia e Produto, deverá existir um ranking para cada escola.

<details>
    <summary style="font-size: 20px; font-weight: 700;">Requisitos Funcionais</summary>
    <div>
        <strong>Notas: </strong>
        <ul>
            <li>Como professor ou avaliador devo poder atribuir notas para cada aluno em diferentes tipos de atividades (Tarefas, Desafios, Projetos).</li>
            <li>As notas registradas devem estar associadas a alunos específicos e às atividades correspondentes</li>
            <li>O sistema deve permitir a especificação da pontuação para cada atividade, variando de 0 a 100</li>
        <ul>
    </div>
    <div>
        <strong>Pontuação: </strong>
        <ul>
            <li>O sistema deve calcular a pontuação de cada aluno com base nas notas atribuídas às atividades e nos pesos atribuídos a cada atividade.</li>
            <li>O cálculo de pontuação deve ser realizado em tempo real à medida que novas notas são registradas.</li>
        <ul>
    </div>
    <div>
        <strong>Ranking Escolar: </strong>
        <ul>
            <li>Devo poder visualizar uma lista dos alunos divididos em três escolas diferentes: Dados, Tecnologia e Produto. De forma ordenada com base na pontuação.</li>
            <li>Cada ranking escolar deve exibir os 10 melhores alunos da escola correspondente.</li>
        <ul>
    </div>
    <div>
        <strong>Ranking Geral: </strong>
        <ul>
            <li>Devo poder visualizar uma lista de todos os alunos independente da escola, de forma ordenada com base na pontuação.</li>
            <li>Devo poder visualizar um ranking com os 3 melhores alunos em uma categoria "pódio geral".</li>
        <ul>
    </div>
</details>
<details>
    <summary style="font-size: 20px; font-weight: 700;">Requisitos não funcionais</summary>
    <div>
        <strong>Desempenho: </strong>
        <ul>
            <li>O cálculo da pontuação e atualização dos rankings deve ocorrer em tempo real e rapidamente, mesmo com um grande número de alunos e atividades.</li>
        <ul>
    </div>
    <div>
        <strong>Escalabilidade: </strong>
        <ul>
            <li>O sistema deve calcular a pontuação de cada aluno com base nas notas atribuídas às atividades e nos pesos atribuídos a cada atividade.</li>
        <ul>
    </div>
</details>