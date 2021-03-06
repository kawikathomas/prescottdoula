class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def initialize(params={})
    params.each do |attr, value|
      self.public_send(\"/\#{attr}=\/", value)
    end if params
  end

end
