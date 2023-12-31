import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Carousel from 'react-native-snap-carousel'; // Importe o Carousel do react-native-snap-carousel
import { useNavigation } from '@react-navigation/native'; // hook de navegação

const images = [
    require('../../../assets/hamburgerCarrosel.png'),
    require('../../../assets/hamburguer-festival.jpg'),
    require('../../../assets/Chocolate-quente-com-chantilly.jpeg'),
];

const CardapioScreen = () => {
    const navigation = useNavigation(); // função de navegação 

    // Função para renderizar os itens do carrossel
    const renderCarouselItem = ({ item }) => (
        <Image source={item} style={styles.carouselImage} />
    );

    return (
        <View style={styles.container}>
            {/* Parte Superior */}
            <View style={styles.topContainer}>
                <Image
                    source={require('../../../assets/menu.png')} // img menu
                    style={styles.menuIcon}
                />
                <Text style={styles.locationText}>Estácio - Brasília DF</Text>
                <TouchableOpacity onPress={() => navigation.navigate('PerfilUsuario')}>
                    <Image
                    source={require('../../../assets/naturoIcon.png')} // img usuario
                    style={[styles.userAvatar, { width: 40, height: 40 }]}
                    />
                </TouchableOpacity>
            </View>

            {/* Barra de Pesquisa */}
            <View style={styles.searchBar}>
                <Image
                    source={require('../../../assets/search.png')} // img lupa
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Procure"
                />
            </View>

            {/* Carrossel de Imagens */}
            <View style={styles.carouselContainer}>
                <Carousel
                    data={images}
                    renderItem={renderCarouselItem}
                    sliderWidth={300}
                    itemWidth={300}
                    loop={true}
                    autoplay={true}
                />
            </View>

            {/* Texto "Cardápio" e botão "Ver tudo" */}
            <View style={styles.cardapioHeader}>
                <Text style={styles.cardapioText}>Cardápio</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CardapioCompleto')}>
                    <Text style={styles.verTudoText}>Ver tudo</Text>
                </TouchableOpacity>
            </View>

            {/* Box com imagem e descrição */}
            <View style={styles.cardapioItem}>
                <Image
                    source={require('../../../assets/cappuccino.png')} // img Cappuccino parcero
                    style={styles.cardapioItemIcon}
                />
                <View style={styles.cardapioItemText}>
                    <Text style={styles.cardapioItemName}>Cappuccino</Text>
                    <Text style={styles.cardapioItemDescription}>Chocolate meio amargo e chantilly</Text>
                </View>
            </View>

            {/* Rodapé com ícones */}
            <View style={styles.footer}>
                <View style={styles.footerIcons}>
                    <TouchableOpacity onPress={() => navigation.navigate('CardapioScreen')}>
                        <Image
                            source={require('../../../assets/home.png')} // Ícone de casa
                            style={[styles.footerIcon, { width: 30, height: 30 }]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CardapioCompleto')}>
                        <Image
                            source={require('../../../assets/list.png')} // Ícone de lista
                            style={[styles.footerIcon, { width: 30, height: 30 }]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('PerfilUsuario')}>
                        <Image
                            source={require('../../../assets/user.png')} // Ícone de usuário
                            style={[styles.footerIcon, { width: 30, height: 30 }]}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuIcon: {
        // Estilo da imagem do menu
    },
    locationText: {
        // Estilo do texto de localização
    },
    userAvatar: {
        // Estilo da imagem do usuário
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        padding: 10,
        marginVertical: 16,
        backgroundColor: '#FFFFFF',
    },
    searchIcon: {
        // Estilo da imagem de lupa
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        // Estilo do input de pesquisa
    },
    cardapioHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 16,
    },
    cardapioText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    verTudoText: {
        color: '#363841A3', // Cor do link "Ver tudo"
        fontSize: 17,
    },
    cardapioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    cardapioItemIcon: {
        // Estilo da imagem do item do cardápio
    },
    cardapioItemText: {
        marginLeft: 10,
    },
    cardapioItemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardapioItemDescription: {
        color: '#888888', // Cor do texto de descrição
        maxWidth: '80%', // Defina a largura máxima desejada para o contêiner de descrição
        flexWrap: 'wrap', // Permite que o texto quebre em várias linhas
        overflow: 'hidden', // Oculta qualquer texto que exceda a largura máxima
    },
    footer: {
        position: 'absolute', // Define a posição como absoluta
        bottom: 0, // Coloca o rodapé no final da tela
        left: 0, // Alinha o rodapé à esquerda da tela
        right: 0, // Alinha o rodapé à direita da tela
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
    },
    footerIcons: {
        flexDirection: 'row',
        justifyContent: 'center', // Centraliza os ícones horizontalmente
        alignItems: 'center', // Centraliza os ícones verticalmente
        marginBottom: 35,
    },
    footerIcon: {
        marginHorizontal: 35,
        // Estilo dos ícones do rodapé
    },
    carouselContainer: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    carouselImage: {
        width: 300,
        height: 200,
        borderRadius: 10,
    },
});

export default CardapioScreen;