/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.cesar.controller;

import br.cesar.model.Pessoa;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author Cesar
 */
@Controller
public class MeuController {
    
   @RequestMapping(value={"", "/", "inicio"})
   public String index() {
       return "index";
   } 
   
   @RequestMapping("/cadastrarAlguem")
   public String cadastro() {
       return "pessoas/cadastroPessoa";
   } 
   
   
}
