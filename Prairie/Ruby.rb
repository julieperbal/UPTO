
# <!--~~~~~~~~ INTRODUCTION A RUBY~~~~~~~~-->#

# EXERCICE 1 - Surface d'un triangle
# print "la base de mon triangle: "
# base = gets.chomp.to_i

# print "la hauteur de mon triangle: "
# hauteur = gets.chomp.to_i

# surfacetriangle=(base*hauteur)/2
# print surfacetriangle

# EXERCICE 2 - Prix TTC
# print "le prix unitaire d'un produit: "
# prix = gets.chomp.to_i

# print "le montant de la TVA: "
# tva = gets.chomp.to_i

# print "la quantité de produits achetés"
# quantite = gets.chomp.to_i

# prixtotal = (prix+(prix*tva)/100)*quantite
# print prixtotal

# EXERCICE 3 - Permutation
# a= 1
# b= 2

# x = a
# a = b
# b = x

# puts a
# puts b

# EXERCICE 4 - Note moyenne
# print "La note de ton premier examen: "
# note1 = gets.chomp.to_i

# print "la note de ton deuxième examen: "
# note2 = gets.chomp.to_i

# print "la note de ton troisième exament: "
# note3 = gets.chomp.to_i

# moyennedesnotes = ((note1*2)+(note2*4)+(note3*5))
# ponderation = (2+4+5)
# moyenneglobale = moyennedesnotes/ponderation
# puts "#{moyenneglobale}"

# moyennepourcentage = (moyenneglobale*100)/20
# puts "#{moyennepourcentage}"

# EXERCICE 5 - Somme des chiffres
# print "choisir un nombre à 3 chiffres: "
# nombre = gets.chomp.to_i
# quotient1= nombre/10
# puts resultat1 = nombre%10

# quotient2 = quotient1/10
# puts resultat2 = quotient2%10

# quotient3 = quotient2/10
# puts resultat3 = quotient3%10

# puts resultat1+resultat2+resultat3



# <!--~~~~~~~~ lES STRUCTURES DE CONTRÔLE ~~~~~~~~-->

# EXERCICE 1 - Maximum de 2 nombres
# print "mon premier nombre: "
# a = gets.chomp.to_i

# print "mon second nombre: "
# b = gets.chomp.to_i

# if a<b
# 	puts "#{b}"
# else
# 	puts "#{a}"
# end

# EXERCICE 2 - Maximum de 3 nombres
# print "Ma première valeur: "
# nombre1 = gets.chomp.to_i

# print "Ma seconde valeur: "
# nombre2 = gets.chomp.to_i

# print "Ma troisième valeur: "
# nombre3 = gets.chomp.to_i

# if (nombre1>nombre2)&&(nombre2>nombre3)
# 	puts "#{nombre1}"
# elsif (nombre2>nombre1)&&(nombre2>nombre3)
# 	puts "#{nombre2}"
# else (nombre3>nombre2)&&(nombre3>nombre1)
# 	puts "#{nombre3}"
# end

# EXERCICE 3 - Le signe d'un nombre
# print "un entier de mon choix: "
# entier = gets.chomp.to_i

# if entier>0
# 	puts "Strictement positif"
# elsif entier==0
# 	puts "Nul"
# else entier<0
# 	puts "Strictement négatif"
# end

# EXERCICE 4 - La fourchette
# puts "Mon premier entier: "
# a = gets.chomp.to_i

# puts "Mon second entier: "
# b = gets.chomp.to_i

# puts "Mon troisième entier: "
# c = gets.chomp.to_i

# if a>b && a<c
# 	puts "True"
# elsif a>c && a<b
# 	puts "True"
# else
# 	puts "False"
# end

# EXERCICE 5 - Nombre de jours dans un mois
# print "Choisir un mois entre 1 et 12 :"
# mois = gets.chomp.to_i

# if mois == 1 || mois==3 || mois==5 || mois==7 || mois==8 || mois==10 || mois==12
# 	puts "Il y a 31 jours dans ce mois"
# elsif mois ==4 || mois==6 || mois== 9 || mois==11
# 	puts "Il y a 30 jours dans ce mois"
# else
# 	puts "Il y a 28 jours dans ce mois"
# end

# EXERCICE 6 - Année bissextile
# print "écrire une année sous la forme aaaa: "
# annee = gets.chomp.to_i

# if annee%4==0 || annee%400==0
# 	puts "annee bissextile"
# else
# 	puts "annee non bissextile"

# EXERCICE 7 - Valider une date
# print "Donner un nombre entre 1 et 31: "
# jour = gets.chomp.to_i

# print "Donner un nombre entre 1 et 12: "
# mois = gets.chomp.to_i

# print "Donner un nombre sous forme aaaa: "
# annee = gets.chomp.to_i

# puts "La date est le #{jour} #{mois} #{annee}"

# EXERCICE 8 - Le stationnement alternatif
# print "Donner une date de jour entre 1 et 31: "
# date = gets.chomp.to_i
#
# print "Donner le numéro de maison devant laqeulle on est garé: "
# numero = gets.chomp.to_i
#
# if date<15 && numero%2==0
# 	puts "Vous êtes bien garé"
# elsif date>16 && numero%2 != 0
#   puts "Vous es bien garé"
# else
#   puts "Vous n'êtes pas bien garé, changez de côté!"
# end



# <!--~~~~~~~~ LES BOUCLES AVEC RUBY~~~~~~~~-->

# EXERCICE 1 - Afficher le n premier chiffre
# print "Donner un nombre naturel: "
# entier = gets.chomp.to_i

# compteur = 0
# while compteur <= entier
#   puts compteur
#   compteur += 1
# end
#
# compteur = entier
# while compteur >0
#   puts compteur
#   compteur -=1
# end
#
# compteur = 0
# while compteur <= entier
#   puts compteur*compteur
#   compteur +=1
# end

# compteur = 1
# while compteur <= entier
#   puts compteur
#   compteur += 2
# end

# compteur = 1
# while compteur <= entier
#   puts compteur
#   compteur +=2
# end

# EXERCICE 2 - Maximum de nombres
# max=0
# print "Donner un nombre: "
# n = gets.chomp.to_i
# while n>=0
#   if max<=n && n<=20
#       max=n
#   end
#   n = gets.chomp.to_i
# end
# puts max

# EXERCICE 3 - Afficher les multiples de 3
# puts "Ecrivez une suite de chiffres puis 0 : "
# n = 1
# max = 0
# compteur = 0
#
# while n != 0
#    n= gets.chomp.to_i
# if n>0
#    if n%3==0
#        puts "#{n} est un multiple de 3"
#    compteur = compteur+1
#    end
# end
# end
# puts "Vous avez entrer #{compteur} multiples de 3"

# EXERCICE 4 - Génération de suites
# a.
# valeur = 1
# indice = 1
# while valeur <20
# valeur = valeur+indice
#   indice +=1
#   puts "#{valeur }"
# end

# b.
# compteur = 0
# loop do
#   compteur +=1
#   next if compteur%3 == 0
#   print compteur
#   break if compteur >= 20
# end

# c.
# compteur = 0
# valeur = 0
# loop do
#   compteur = compteur+valeur
#   valeur +=1
#   puts "#{compteur}"
#   break if compteur >= 30
# end

# EXERCICE 5 - Factorielle
# *** La factorielle de n est formellement définie par : n!= II i = 1*2*3*4...*(n-1)*n
# ***   1! = 1
# ***   2! = 1 × 2 = 2
# ***   3! = 1 × 2 × 3 = 6
# ***   4! = 1 × 2 × 3 × 4 = 24
# ***   10! = 1 × 2 × 3 × 4 × 5 × 6 × 7 × 8 × 9 × 10 = 3 628 800
#
# *** Cette définition donne aussi: 0! = 1

# print "Donner un nombre : "
# n = gets.chomp.to_i
#
# compteur=1
# f = 1
#
# while compteur < n
#   compteur +=1
#   f = compteur*f
#   puts "#{f}"
# end

# EXERCICE 6 - Somme de chiffres
# print "Donner un nombre à plusieurs chiffres: "
# n = gets.chomp.to_i
# somme = 0
#
# while n !=0
#   somme += n % 10
#   n /= 10
# end
# puts somme

# EXERCICE 7 - Jeu de la fourchette
# chiffre = 56
# nombre_test = 0
# n= 0
# trouve = false
# while trouve == false && n <= 8
#   nombre_test = gets.chomp.to_i
#   n+=1
#   if nombre_test >= 1 && nombre_test <= 100
#     if nombre_test == chiffre
#       trouve = true
#     elsif nombre_test < chiffre
#       puts "nombre donné trop petit"
#     else nombre_test > chiffre
#       puts "nombre donné trop grand"
#     end
#
#   end
#   if trouve == true
#     puts "Bravo, vous avez trouvé en #{n} essais"
#   else n >= 8 && trouve == false
#     puts "Désolé, le nombre était #{chiffre}"
#   end
# end



# <!--~~~~~~~~ LES STRUCTURES DE DONNEES~~~~~~~~-->

# EXERCICE 1 - Somme
# mon_tableau = [15, 12, 5, 80, 67]
# puts mon_tableau
# somme = 0
# mon_tableau.each do |x|
#   somme = mon_tableau.inject(:+)
# puts "la somme de mon tableau est: #{somme}"
# end

# EXERCICE 2 - Maximum et minimum
# tableau = [1, 78, 5, 34, 65].min
# puts "#{tableau}"
#
# tableau = [1, 78, 5, 34, 65].max
# puts "#{tableau}"

# EXERCICE 3 - Nombre d'éléments d'un tableau
tableau = [34, 6, 89, 20, 12, 99].count
puts "#{count}"
