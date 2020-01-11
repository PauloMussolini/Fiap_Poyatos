function IndexHelp() {

    var $this = this;

    this.tour = new Tour({
        steps: [
        {
            element: "",
            title: "Cadastro de Equipamentos",
            content: "Cadastro dos equipamentos de exposição das lojas",
            orphan: true
        },
        {
            element: "#grdEquipamento",
            title: "Grid de Equipamentos",
            content: "Relação dos equipamentos disponíveis, de acordo com os filtros",
            placement: 'top'
        },
        {
            element: "#btnIncluir",
            title: "Incluir Equipamento",
            content: "Clique aqui para incluir novo equipamento",
            placement: 'left'
        },
        {
            element: "#btnAlterar",
            title: "Alterar Equipamento",
            content: "Clique aqui para alterar um equipamento",
            placement: 'bottom'
        },
        {
            element: "#btnExcluir",
            title: "Excluir Equipamento",
            content: "Clique aqui para excluir um equipamento",
            placement: 'left'
        },
        {
            element: ".k-grouping-header:first",
            title: "Agrupar",
            content: "Arraste uma ou mais colunas aqui para agrupar os dados",
            placement: 'bottom'
        },
        {
            element: ".k-pager-wrap:first",
            title: "Paginar",
			content: "Aqui você pode paginar o grid e alterar a quantidade de registros por página",
            placement: 'top'
        },
        {
            element: ".k-i-expand:first",
            title: "Detalhes",
			content: "Clique aqui para expandir e ver detalhes do equipamento",
            placement: 'right'
        },
        {
            element: ".k-i-more-vertical:first",
            title: "Ordenação, filtros e exibição",
			content: "Clique aqui para Ordenar, Filtrar, exibir ou ocultar colunas",
            placement: 'top'
        },
        {
            element: ".k-pager-refresh:first",
            title: "Atualizar grid",
			content: "Clique aqui para atualizar os dados do grid",
            placement: 'top'
        }],
        backdrop: true,
        storage: false,
        onEnd: function (tour) {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        }
    });

    this.tour.init();

    this.iniciar = function () {
        if (this.tour.ended())
            this.tour.restart();
        else
            this.tour.start(true);

    }
}