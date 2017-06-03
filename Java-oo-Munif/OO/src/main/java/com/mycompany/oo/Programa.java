/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.oo;

/**
 *
 * @author Cesar
 */
public class Programa {
    
    
    public static void main(String ... args){
        Lugar casa=new Lugar("casa");
        Personagem p1=new Jogador("Maria",casa);
        Personagem p2=new NPC(casa);
        
        
    }
    
    
    
    public static void mainVelho(String []args){
        try {
            System.out.println("Ola Mundo!!!");
            
            Liquidificador liq1=new Liquidificador ();
            
            liq1.setVelocidade(2);
            System.out.println(liq1.getVelocidade());
            System.out.println(liq1.praQue());
            liq1.setVelocidade(-3);
            System.out.println(liq1.getVelocidade());
            System.out.println(liq1.praQue());
        } catch (LiqException ex) {
            System.out.println("Problemas "+ex.getMessage());
        }
        catch(NumberFormatException ex){
            System.out.println ("Erro na entrada de dados");
        }
        
        
        
    }
    
}
