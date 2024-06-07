```java
import java.util.Random;

public class PokemonBot {
    private String[] pokemonList = {"Pikachu", "Eevee", "Charmander", "Squirtle", "Bulbasaur"};
    private String[] partyPokemon = new String[6];
    private String[] pcPokemon = new String[6];
    private int partyCount = 0;
    private int pcCount = 0;

    public void spawnPokemon() {
        Random rand = new Random();
        int index = rand.nextInt(pokemonList.length);
        String spawnPokemon = pokemonList[index];
        System.out.println("A wild " + spawnPokemon + " has appeared! Catch it by typing !c " + spawnPokemon);
    }

    public void catchPokemon(String pokemon) {
        if (partyCount < 6) {
            partyPokemon[partyCount] = pokemon;
            System.out.println("Congrats! " + pokemon + " has been transferred to your party.");
            partyCount++;
        } else {
            pcPokemon[pcCount] = pokemon;
            System.out.println(pokemon + " has been transferred to your PC.");
            pcCount++;
        }
    }
}
```
