<%@ Control Language="C#" AutoEventWireup="true" CodeFile="BarraEdicao.ascx.cs" Inherits="Adm_BarraEdicao" %>
<asp:Button ID="btnNovo" runat="server" Text="Novo" />
<asp:Button ID="btnGravar" runat="server" Text="Gravar" />
<asp:Button ID="btnAlterar" runat="server" Text="Alterar" />
<asp:Button ID="btnCancelar" runat="server" Text="Cancelar" />
<asp:Button ID="btnExcluir" runat="server" Text="Excluir"
    OnClientClick="return confirm('Deseja realmente excluir este registro?');" />