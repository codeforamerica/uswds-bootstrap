require 'yaml'

module Bridge
  class Generator < Jekyll::Generator
    def generate(site)
      site.data["configBridge"] = YAML.load_file(File.join(__dir__, 'configBridge.json'))
    end
  end
end
