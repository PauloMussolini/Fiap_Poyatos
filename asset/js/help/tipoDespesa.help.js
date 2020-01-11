function TipoDespesaHelp() {

    var $this = this;

    this.tour = new Tour({
        steps: [
        {
            element: "",
            title: "Tabela de Tipos de Despesas",
            content: "Relação dos Tipos de Despesas",
            orphan: true
        },
        {
            element: "#grdTipoDespesa",
            title: "Grid dos Tipos de Despesas",
            content: "Relação dos Tipos de Despesa, de acordo com os filtros.",
            placement: 'top'
        },
        {
            element: "#btnIncluir",
            title: "Incluir Tipo de Despesa",
            content: "Clique aqui para incluir novo Tipo de Despesa",
            placement: 'bottom'
        },
        {
            element: "#btnAlterar",
            title: "Alterar Tipo de Despesa",
            content: "Clique aqui para alterar uma Tipo de Despesa",
            placement: 'bottom'
        },
        {
            element: "#btnExcluir",
            title: "Excluir Tipo de Despesa",
            content: "Clique aqui para excluir uma Tipo de Despesa",
            placement: 'left'
        },
        {
            element: "#btnExportar",
            title: "Exportar para Excel",
            content: "Clique aqui para Exportar os Tipos de Despesa para Excel",
            placement: 'left'
        },
        {
            element: ".k-i-more-vertical:first",
            title: "Ordenação, filtros e exibição",
			content: "Clique aqui para Ordenar, Filtrar, exibir ou ocultar colunas",
            placement: 'right'
        },
        {
            element: ".k-pager-wrap:first",
            title: "Paginar",
			content: "Aqui você pode paginar o grid e alterar a quantidade de registros por página",
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