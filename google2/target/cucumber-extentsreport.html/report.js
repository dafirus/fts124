$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ConsultarIngles.feature");
formatter.feature({
  "line": 1,
  "name": "Buscar Termo",
  "description": "",
  "id": "buscar-termo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6159070700,
  "status": "passed"
});
formatter.before({
  "duration": 5126618300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Busca Termo Unico com Enter",
  "description": "",
  "id": "buscar-termo;busca-termo-unico-com-enter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "que acesso o site do Google",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "digito o termo \"feriado\" e pressiono Enter",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#And pressiono o Enter"
    }
  ],
  "line": 7,
  "name": "vejo os resultados e a guia \"feriado - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarIngles.que_acesso_o_site_do_Google()"
});
formatter.result({
  "duration": 1591747900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "feriado",
      "offset": 16
    }
  ],
  "location": "ConsultarIngles.digito_o_termo_e_pressiono_Enter(String)"
});
formatter.result({
  "duration": 1802937100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "feriado - Pesquisa Google",
      "offset": 29
    }
  ],
  "location": "ConsultarIngles.vejo_os_resultados_e_a_guia(String)"
});
formatter.result({
  "duration": 391943200,
  "status": "passed"
});
formatter.after({
  "duration": 749089300,
  "status": "passed"
});
formatter.after({
  "duration": 704735600,
  "status": "passed"
});
formatter.uri("ConsultarInglesPO.feature");
formatter.feature({
  "line": 1,
  "name": "Buscar Termo",
  "description": "",
  "id": "buscar-termo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5272595200,
  "status": "passed"
});
formatter.before({
  "duration": 5134750300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Busca Termo Unico com Enter",
  "description": "",
  "id": "buscar-termo;busca-termo-unico-com-enter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "que acesso o site do Google1",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "digito o termo \"geladeira\" e pressiono Enter1",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#And pressiono o Enter"
    }
  ],
  "line": 7,
  "name": "vejo os resultados e a guia 1 \"feriado - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarIngles.que_acesso_o_site_do_Google()"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.Given que acesso o site do Google1(ConsultarInglesPO.feature:4) matches more than one step definition:\n  que acesso o site do Google in ConsultarIngles.que_acesso_o_site_do_Google()\n  que acesso o site do Google1$ in ConsultarInglesPO.que_acesso_o_site_do_Google()\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "geladeira",
      "offset": 16
    }
  ],
  "location": "ConsultarIngles.digito_o_termo_e_pressiono_Enter(String)"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.When digito o termo \"geladeira\" e pressiono Enter1(ConsultarInglesPO.feature:5) matches more than one step definition:\n  digito o termo \"([^\"]*)\" e pressiono Enter in ConsultarIngles.digito_o_termo_e_pressiono_Enter(String)\n  digito o termo \"([^\"]*)\" e pressiono Enter1$ in ConsultarInglesPO.digito_o_termo_e_pressiono_Enter(String)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "feriado - Pesquisa Google",
      "offset": 31
    }
  ],
  "location": "ConsultarInglesPO.vejo_os_resultados_e_a_guia(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 674901600,
  "status": "passed"
});
formatter.after({
  "duration": 686203300,
  "status": "passed"
});
});