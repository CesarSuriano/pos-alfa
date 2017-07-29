<%@ Page Title="" Language="C#" MasterPageFile="~/Adm/MasterPage.master" AutoEventWireup="true" CodeFile="Categoria.aspx.cs" Inherits="Adm_Categoria" %>

<%@ Register Src="~/Adm/BarraEdicao.ascx" TagPrefix="uc1" TagName="BarraEdicao" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    
    <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>

    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>

    <asp:Button ID="btnLista" runat="server" Text="Listagem" OnClick="btnLista_Click" />
    <asp:Button ID="btnCadastrar" runat="server" Text="Cadastrar" OnClick="btnCadastrar_Click" />

    <asp:MultiView ID="MultiViewCategoria" runat="server">
        
        <asp:View ID="tabListagem" runat="server">
            <asp:ObjectDataSource ID="ObjectDataSource1"
                runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="DataSetTableAdapters.TbCategoriaTableAdapter"></asp:ObjectDataSource>

            <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="cat_id" DataSourceID="ObjectDataSource1" AllowSorting="true" OnSelectedIndexChanged="GridView1_SelectedIndexChanged">
                <Columns>
                    <asp:BoundField Visible="false" DataField="cat_id" HeaderText="cat_id" InsertVisible="False" ReadOnly="True" SortExpression="cat_id" />
                    <asp:BoundField DataField="cat_nome" HeaderText="Categoria" SortExpression="cat_nome" />

                    <asp:CommandField HeaderText="Selecionar" SelectText="Selecionar" ButtonType="Button" ShowSelectButton="true" />
                </Columns>
            </asp:GridView>
        </asp:View>

        <asp:View ID="tabCadastro" runat="server">
            <uc1:BarraEdicao runat="server" ID="BarraEdicao" /><br />
            <asp:HiddenField ID="campoID" runat="server" />
            Nome:<br /> 
            <asp:TextBox ID="txtCatNome" runat="server"></asp:TextBox>
        </asp:View>

    </asp:MultiView>

            </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>