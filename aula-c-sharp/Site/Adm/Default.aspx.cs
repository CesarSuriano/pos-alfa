using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Adm_Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        ControleLogin c1 = new ControleLogin();
        if (c1.verUsuarioLogado(Session["usuario"] as Usuario))
            Response.Redirect("~/Adm/Inicio.aspx");
    }

    protected void btnLogin_Click(object sender, EventArgs e)
    {
        ControleLogin c1 = new ControleLogin();
        int codigo = c1.buscarUsuario(txtLogin.Text, txtSenha.Text);

        if (codigo > 0)
        {
            Usuario usuario = new Usuario(codigo);
            Session["usuario"] = usuario;
            Response.Redirect("~/Adm/Inicio.aspx");
        }
    }
}