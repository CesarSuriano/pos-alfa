using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Adm_Categoria : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            MultiViewCategoria.ActiveViewIndex = 0;
            habilitarCampos(false);
        }
            

        BarraEdicao.BtnNovo.Click += new EventHandler(btnNovoClick);
        BarraEdicao.BtnAlterar.Click += new EventHandler(btnAlterarClick);
        BarraEdicao.BtnCancelar.Click += new EventHandler(btnCancelarClick);
        BarraEdicao.BtnGravar.Click += new EventHandler(btnSalvarClick);
        BarraEdicao.BtnExcluir.Click += new EventHandler(btnExcluirClick);
    }

    protected void btnLista_Click(object sender, EventArgs e)
    {
        MultiViewCategoria.ActiveViewIndex = 0;
    }

    protected void btnCadastrar_Click(object sender, EventArgs e)
    {
        MultiViewCategoria.ActiveViewIndex = 1;
    }

    private void atualizarCampos(int pCatId)
    {
        if (pCatId > 0)
        {
            Categoria categoria = new Categoria(pCatId);
            campoID.Value = categoria.Cat_id.ToString();
            txtCatNome.Text = categoria.Cat_nome;
        }
        else
        {
            campoID.Value = "0";
            txtCatNome.Text = "";
        }
    }

    private void habilitarCampos(bool habilitar)
    {
        txtCatNome.Enabled = habilitar;
        BarraEdicao.BtnGravar.Enabled = habilitar;

        habilitar = !habilitar;
        BarraEdicao.BtnNovo.Enabled = habilitar;
        BarraEdicao.BtnAlterar.Enabled = habilitar;
        BarraEdicao.BtnExcluir.Enabled = habilitar;
    }

    private int codigoSelecionado()
    {
        if (GridView1.SelectedDataKey != null)
        {
            return int.Parse(GridView1.SelectedDataKey[0].ToString());
        }
        else
        {
            return 0;
        }
    }

    protected void btnNovoClick(object sender, EventArgs e)
    {
        atualizarCampos(0);
        habilitarCampos(true);
    }

    protected void btnAlterarClick(object sender, EventArgs e)
    {
        if (!campoID.Equals("0"))
        {
            habilitarCampos(true);
        }
    }

    protected void btnCancelarClick(object sender, EventArgs e)
    {
        atualizarCampos(codigoSelecionado());
        habilitarCampos(false);
    }

    protected void btnExcluirClick(object sender, EventArgs e)
    {
        Categoria categoria = new Categoria();
        string retorno = categoria.excluir(int.Parse(campoID.Value));

        if (string.IsNullOrEmpty(retorno))
        {
            atualizarCampos(0);
            ObjectDataSource1.DataBind();
            GridView1.DataBind();
        }
        else
        {
            mostrarMensagem(retorno);
        }
    }

    protected void btnSalvarClick(object sender, EventArgs e)
    {
        Categoria categoria = new Categoria();
        string retorno = categoria.salvar(int.Parse(campoID.Value), txtCatNome.Text.ToString());

        if(string.IsNullOrEmpty(retorno))
        {
            mostrarMensagem("Registro salvo com sucesso.");
            atualizarCampos(codigoSelecionado());
            habilitarCampos(false);

            ObjectDataSource1.DataBind();
            GridView1.DataBind();
        }
        else
        {
            mostrarMensagem(retorno);
        }
    }

    private void mostrarMensagem(string mensagem)
    {
        ScriptManager.RegisterStartupScript(this, this.GetType(), Guid.NewGuid().ToString(), "alert('"+mensagem+"')", true);
    }

    protected void GridView1_SelectedIndexChanged(object sender, EventArgs e)
    {
        atualizarCampos(codigoSelecionado());
        btnCadastrar_Click(null, null);
    }
}