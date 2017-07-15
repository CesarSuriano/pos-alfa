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
        MultiViewCategoria.ActiveViewIndex = 0;
    }

    protected void btnLista_Click(Object sender, EventArgs e)
    {
        MultiViewCategoria.ActiveViewIndex = 0;
    }

    protected void btnCadastrar_Click(Object sender, EventArgs e)
    {
        MultiViewCategoria.ActiveViewIndex = 1;
    }
}