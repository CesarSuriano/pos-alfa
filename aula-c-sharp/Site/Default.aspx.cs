using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        
    }

    /*
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
    }*/
}