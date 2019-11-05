package google2;

import static org.junit.Assert.assertEquals;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

@RunWith(Parameterized.class)
public class Buscador {
	// Atributos
	String baseUrl;
	WebDriver driver;
		
	// Métodos e Funções
	
	// Estrutura para leitura de massa de teste CSV
	
	// Bloco 1 - Atributos da massa (campos)
	String id;
	String termo;
	String resultado;
	String browser;
	
	// Bloco 2 - Construtor
	
	public Buscador(String id, String termo, String resultado, String browser) {
		this.id = id;
		this.termo = termo;
		this.resultado = resultado;
		this.browser = browser;
	}
	
	// Bloco 3 - Coleção intermediária
	@Parameters
	public static Collection <String[]> LerCSV() throws IOException{
		return LerArquivo("C:\\Users\\Ache\\fts124-workspace\\google2\\db\\massaGoogle.csv");
	}
	
	// Bloco 4 - Leitor de Dados (NÃO MEXER!)
	
	public static Collection <String[]> LerArquivo(String caminhoMassa) throws IOException{
		List<String[]> dados = new ArrayList<String[]>();
		String linha;
		BufferedReader arquivo = new BufferedReader(new FileReader(caminhoMassa));
		while ((linha = arquivo.readLine()) != null) {
			String campos[] = linha.split(";");
			dados.add(campos);
		}
		arquivo.close();
				
		return dados;
		
	}
	
	@Before // Antes do Teste
	public void Iniciar() {
		baseUrl = "https://www.google.com.br";
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Ache\\fts124-workspace\\google2\\drivers\\chrome\\78\\chromedriver.exe");
		driver = new ChromeDriver();
		// driver.manage().timeouts().implicitlyWait(60, TimeUnit.MILLISECONDS);
		//driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@After //Depois do Teste
	public void Finalizar() {
		driver.quit();
	}
	
	@Test // Durante o Teste
	public void Buscar() {
		driver.get(baseUrl); // abre o browser nessa URL
		driver.findElement(By.name("q")).clear();
		driver.findElement(By.name("q")).sendKeys(Keys.chord(termo)); // Keys.chord é para simular uma pessoa digitando letra por letra
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
		String resultadoEsperado = resultado;
		String resultadoReal = driver.getTitle();
		assertEquals(resultadoEsperado, resultadoReal);
	}
	
	  //@Test
	  public void BuscarSeleniumIDE() throws Exception {
	    driver.get(baseUrl + "/");
	    driver.findElement(By.name("q")).clear();
	    driver.findElement(By.name("q")).sendKeys("black friday");
	    driver.findElement(By.name("btnK")).click();
	    
	    assertEquals("black friday - Pesquisa Google", driver.getTitle());
	  }

}

