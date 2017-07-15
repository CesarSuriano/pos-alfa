using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Categoria
/// </summary>
public class Categoria
{
    #region Atributos
    private int cat_id;
    private string cat_nome;
    DataSetTableAdapters.tbCategoriaTableAdapter dsCategoria = new DataSetTableAdapters.tbCategoriaTableAdapter();

    public int Cat_id { get { return cat_id; } }
    public string Cat_nome 
    {
        get { return cat_nome; }
        set { cat_nome = value; }
    }

    #endregion
    public Categoria()
	{
		
	}

    public Categoria(int pCat_id)
    {
        DataSet.tbCategoriaDataTable tbCategoria = new DataSet.tbCategoriaDataTable();
        DataSetTableAdapters.tbCategoriaTableAdapter dsCategoria = new DataSetTableAdapters.tbCategoriaTableAdapter();

        //OS dois fazem a mesma coisa
        tbCategoria = dsCategoria.GetDataBy(pCat_id);
        //dsCategoria.FillBy(tbCategoria, pCat_id);       

        if (tbCategoria.Rows.Count > 0)
        {
            DataSet.tbCategoriaRow regCategoria = (DataSet.tbCategoriaRow)tbCategoria.Rows[0];
            this.cat_id = regCategoria.cat_id;
            this.cat_nome = regCategoria.cat_nome;
        }

    }

    public string salvar(int pCat_id, string pCat_nome)
    {
        

        if (string.IsNullOrEmpty( pCat_nome))
        {
            return "O nome da categoria é obrigatório";
        }

        try{
        if(pCat_id > 0)
            dsCategoria.Update(pCat_nome, pCat_id);
        else
            dsCategoria.Insert(pCat_nome);
        }
        catch(Exception e)
        {
            return "Erro ao inserir a categoria: " + e.Message;
        }
        return "";

        
    }

    public string excluir(int pCat_id)
    {
        try
        {
            dsCategoria.Delete(pCat_id);
            return "";
        }
        catch (Exception e)
        {
            return "Erro ao excluir a categoria: " + e.Message;
        }
    }


}